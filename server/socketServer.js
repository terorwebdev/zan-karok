const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3003;

var listSock = [];

function onConnection(socket) {
    console.log("Connected : " + socket.id);
    // ----- client listener -----
    socket.on('kclient-auth', (data) => {
        if (data.cmd == 'req-auth') {
            var res = {
                cmd: 'rep-auth',
                type: 'id',
                data: socket.id
            };
            socket.emit('kclient-auth', res);
        }

        //socket.broadcast.emit('kclient-auth', res);
        //socket.broadcast.to(socket.id).emit('kclient-auth', res);

        console.log("kclient-auth Received", data);
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

    socket.on('disconnect', function() {
        console.log("Disconnected : " + socket.id);
    });

}

io.on('connection', onConnection);

http.listen(port, () => {
    console.log(`socket server started on port: ${port}`);
});