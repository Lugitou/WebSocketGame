/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import http from 'http';
import Game from './game/Game';

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
  const game: Game = new Game(io, socket);
  console.log('a user connected');
});
