const EventEmitter = require('events');
const Peer = require('peerjs');
const io = require('socket.io-client');

export default class ChatEmitter extends EventEmitter {
  constructor () {
    super ();
    this.calls = [];
  }

  connect (username) {

    // Create a new peer
    this.peer = new Peer(username, {
      host: 'nc-signalling-server.herokuapp.com',
      port: '',
      secure: true,
      path: '/api'
    });

    this.peer.on('open', (myUsername) => {
      console.log(`Connected to peer server with username ${myUsername}`);

      this.socket = io('https://nc-signalling-server.herokuapp.com');
      this.socket.on('connect', () => {
        this.socket.on('USER_CONNECTED', (peersUsername) => {
          console.log(`New user connected with username ${peersUsername}`);
        });
      });
    });
  }
}
