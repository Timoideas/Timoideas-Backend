import { Server } from 'socket.io';
import { server } from '../server';
export const socket = new Server(server, {
  // path: '/timoideas',
  cors: {
    origin: true,
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['hola'],
  },
});
require('./client.socket');
require('./audio.socket');
