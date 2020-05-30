const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3003;

// player
// socket {socket_id: "", type: "", player_id: ""}

var socketList = [];

function addSocketList(item) {
    var found = socketList.find(function(list) {
        return list.socket_id === item.socket_id;
    });

    if (found === undefined) {
        socketList.push(item);
    }
}

function removeSocketList(socketId) {
    var found = socketList.find(function(item) {
        return item.socket_id === socketId;
    });

    socketList = socketList.filter(item => item.socket_id !== socketId)

    //console.log('socketList', socketList);

    return found;
}

function getPlayer() {
    var found = socketList.find(function(item) {
        return item.type === 'player';
    });
    return found;
}

function getClient() {
    var found = socketList.find(function(item) {
        return item.type === 'client';
    });
    return found;
}

function onConnection(socket) {
    console.log("Connected : " + socket.id);

    // ----- client listener -----

    socket.on('kclient', (data) => {
        //socket.broadcast.emit('drawing', data);
        console.log(data);
    });

    // ----- master listener -----
    socket.on('kmaster', (data) => {
        //socket.broadcast.emit('drawing', data);
        data.socket_id = socket.id;
        console.log(data);
        var res = master_listener(data);
        socket.emit('kmaster', res);
    });

    // ----- tv-app listener -----
    socket.on('player', (data) => {
        //socket.broadcast.emit('drawing', data);
        console.log(data);
        if (data.cmd === 'req-socket-id') {
            var res = { cmd: "socket-id", socket_id: socket.id };
            var item = {
                socket_id: socket.id,
                type: 'player',
                player_id: data.player_id
            };
            addSocketList(item);
            socket.emit('player', res);
        }

    });

    // ----- tv-app listener -----
    socket.on('heartbeat', (data) => {
        console.log(data)
        var res = { data: "Headbeat Received", socket_id: socket.id };
        socket.emit('heartbeat', res);
    });

    socket.on('disconnect', function() {
        console.log("Disconnected : " + socket.id);
        var disconnected = removeSocketList(socket.id);
        console.log("Disconnected : ", disconnected);
    });

}

io.on('connection', onConnection);

function master_listener(data) {
    if (data.cmd === 'req-socket-id') {
        var res = { cmd: "socket-id", socket_id: data.socket_id };
        var item = {
            socket_id: data.socket_id,
            type: 'master',
            master_id: data.master_id
        };
        addSocketList(item);
        return res;
    }
}

function client_listener(data) {}

function player_listener(data) {}

http.listen(port, () => {
    console.log(`socket server started on port: ${port}`);
});