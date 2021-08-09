import { socket } from './index.socket';
socket.on('connection', (client) => {
  client.on('audio:client', (data) => {
    client.broadcast.emit('audio:server', data);
  });
  client.on('chat:client', (data) => {
    client.broadcast.emit('chat:server', data);
  });
});
