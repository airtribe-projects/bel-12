const { Duplex } = require('stream');

// Custom Duplex Stream for each client
class ClientDuplexStream extends Duplex {
  constructor(socket) {
    super();
    this.socket = socket;
    this.socket.on('data', (chunk) => this.push(chunk)); // Pipe data to readable side
    this.socket.on('end', () => this.push(null));
  }

  _write(chunk, encoding, callback) {
    this.socket.write(chunk, encoding, callback); // Write to the socket
  }

  _read(size) {
    // No-op, data pushed via socket 'data' event
  }
}
module.exports = {ClientDuplexStream}