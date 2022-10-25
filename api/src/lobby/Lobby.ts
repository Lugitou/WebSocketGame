export default class Lobby {
  private io: any;
  private socket: any;
  private name: string;
  private players: Array<any> = [];

  constructor(io: any, socket: any, name: string) {
    this.io = io;
    this.socket = socket;
    this.name = name;
  }

  public addPlayer(player: any) {
    this.players.push(player);
  }

  public getPlayers() {
    return this.players;
  }
}
