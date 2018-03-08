const path = require('path');
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, "..", "/public");
// console.log(__dirname + "../public");

const port = process.env.PORT || 3000;
var app = express();
app.use(express.static(publicPath))

var server = http.createServer(app);
var io = socketIo(server);


io.on('connection', (socket) => {
    console.log('new user connected');

    socket.emit('newMessage',generateMessage('Admin','Welcome to the Chat App'));

    socket.broadcast.emit('newMessage',generateMessage('Admin','New User Joined'))
    
    socket.on('createMessage',(message,callback)=>{
        console.log('Create Message',message);

        io.emit('newMessage',generateMessage(message.from,message.text));
        callback('This is from server');
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