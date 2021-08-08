import { socket } from './index.socket';
socket.on('connection', (client) => {
  client.on('radio', (data) => {
    client.emit('voice', data);
  });
});
