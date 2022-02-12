
export class Server {
    protected socket: WebSocket; 

    constructor(socket: WebSocket) {
        this.socket = socket;
        this.test();
    }

    test() {
        console.log(this.socket);
    }
}