export default class Game {
  private io: any;
  private socket: any;

  constructor(io: any, socket: any) {
    this.io = io;
    this.socket = socket;
    console.log(`Socket ${socket.id} has connected. io: ${io}`);
  }
}
