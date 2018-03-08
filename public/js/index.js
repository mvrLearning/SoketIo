var socket = io();

socket.on('connect', function() {
    console.log('Connected to Server');
});

socket.on('disconnect', function() {
    console.log('Disconnected from the Server');
})

socket.on('newEmail', function(email) {
    console.log('new Email', email);

});

socket.on('newMessage',function(msg){
console.log(msg);
});

socket.emit('createMessage',{
    from:'frank',
    text:'Hi'
},function(data){
    console.log('Got it',data);
    
})