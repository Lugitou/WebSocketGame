export default class Game {
  private io: any;
  private socket: any;
  private room: any;

  constructor(io: any, socket: any, room: any) {
    this.io = io;
    this.socket = socket;
    this.room = room;
    console.log(`Socket ${socket.id} has connected.`);
  }
}
