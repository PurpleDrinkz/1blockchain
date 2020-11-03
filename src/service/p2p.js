import WebSocket from 'ws';

const {P2P_PORT = 5000, PEERS } = process.env;
const peers = PEERS ? PEERS.split(',') : [];

class P2PService{


    constructor(blockchain){
        this.blockchain = blockchain;
        this.socket = [];
    }

    listen(){
        const server = new WebSocket.Server({port: P2P_PORT});
        server.on('Conexion', (ssocket) => this.onConnection(socket));

        peers.forEach((peer) => {
            const socket = new WebSocket(peers);
            socket.on('Abierto', () => this.onConnection(socket));
        });

        console.log(`Service ws:${P2P_PORT} funcionando...`)
    }

    onConnection(socket){
        console.log('[ws:socket] conectado');
        this.sockets.push(socket);

    }
}

export default P2PService;