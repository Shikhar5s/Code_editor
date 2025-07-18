


import express from 'express'

import http from 'http';

import {Server} from 'socket.io'

const app = express();
const server = http.createServer(app);



const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});


io.on('connection',(socket)=>{
    console.log('socket connected',socket.id)

    socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
})


const PORT=process.env.PORT || 5000;

server.listen(PORT,()=>console.log(`Listening on poert ${PORT}`))