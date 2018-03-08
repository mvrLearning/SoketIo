const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const {genearateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, "..", "/public");
// console.log(__dirname + "../public");

const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(publicPath))

var server = http.createServer(app);
var io = socketIo(server);


io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage',genearateMessage('Admin','Welcome to the Chat App'));

    socket.broadcast.emit('newMessage',genearateMessage('Admin','New User Joined'))
    
    socket.on('createMessage',(message)=>{
        console.log('Create Message',message);

        io.emit('newMessage',genearateMessage(message.from,message.text))
        // socket.broadcast.emit('newMessage',{
        //     from:message.from,
        //     text:message.text,
        //     createdAt:new Date().getTime()
        // })
    })
    socket.on('disconnect', () => {
        console.log('Disconnected the client');
    })
});

server.listen(port, () => {
    console.log('listening on port 3000');
})