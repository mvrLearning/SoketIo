var socket = io();

socket.on('connect', function() {
    console.log('Connected to Server');

    socket.emit('createEmail', {
        to: 'jen@example.com',
        text: 'Hey Whoooo!!!'
    })
});

socket.on('disconnect', function() {
    console.log('Disconnected from the Server');

})

socket.on('newEmail', function(email) {
    console.log('new Email', email);

})