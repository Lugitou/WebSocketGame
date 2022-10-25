/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import http from 'http';
import Game from './game/Game';
import Lobby from './lobby/Lobby';
import NameGenerator from './utils/NameGenerator';

const socketIO = require('socket.io');

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
const server = new http.Server(app);
const io = socketIO(server, {
  cors: {
    origin: 'http://localhost:8080',
  },
});

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

server.listen(PORT + 1, () => {
  console.log(`Socket listening on port ${PORT + 1}`);
});

io.on('connection', (socket: any) => {
  //const game: Game = new Game(io, socket);
  console.log(`Socket ${socket.id} has connected!`);

  socket.on('roomExist', (room: string, callback: any) => {
    const rooms = io.sockets.adapter.rooms;
    callback(rooms.has(room));
  });

  socket.on('createRoom', (room: string, callback: any) => {
    const roomName = NameGenerator(6);
    socket.join(roomName);

    const lobby = new Lobby(io, socket, room);
    lobby.addPlayer(socket.id);
    socket.emit('playersList', roomName);
  });
});

io.on('disconnect', (socket: any) => {
  console.log(`Socket ${socket.id} has disconnected.`);
});
