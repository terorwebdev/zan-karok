const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3003;

function onConnection(socket) {
    console.log(socket);
    // ----- client listener -----
    socket.on('kclient-auth', (data) => {
        //socket.broadcast.emit('drawing', data);
        console.log(data);
    });

    socket.on('kclient', (data) => {
        //socket.broadcast.emit('drawing', data);
        console.log(data);
    });

    // ----- master listener -----
    socket.on('kmaster', (data) => {
        //socket.broadcast.emit('drawing', data);
        console.log(data);
    });

}

io.on('connection', onConnection);

http.listen(port, () => {
    console.log(`socket server started on port: ${port}`);
});