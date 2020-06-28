const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3003;
const monggo = require('./monggoconnect');

module.exports = {
    getPlayer: getPlayer
};

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
    return new Promise((resolve, reject) => {
        var found = socketList.filter(function(item) {
            return item.type === 'player';
        });
        return resolve(found);
    });
}

function getClient() {
    return new Promise((resolve, reject) => {
        var found = socketList.filter(function(item) {
            return item.type === 'client';
        });
        return resolve(found);
    });
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
        master_listener(data);
        //socket.emit('kmaster', res);
        // var res = master_listener(data);
        // socket.emit('kmaster', res);
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
        const found = socketList.find(item => item.socket_id === socket.id);
        if (found !== undefined) {
            var res = { cmd: "player", type: "disconnect", data: found.player_id };
            socket.broadcast.emit('kmaster', res);
        }
        var disconnected = removeSocketList(socket.id);
        console.log("Disconnected : ", disconnected);
    });

}

io.on('connection', onConnection);

// 

function master_listener(data) {
    if (data.cmd === 'req-socket-id') {
        var res = { cmd: "socket-id", socket_id: data.socket_id };
        var item = {
            socket_id: data.socket_id,
            type: 'master',
            master_id: data.master_id
        };
        addSocketList(item);
        //return res;
        io.to(data.socket_id).emit('kmaster', res);
    }

    if (data.cmd === 'approve_player') {
        var res = { cmd: "player", type: "player_approved", data: data.data };
        monggo.approve_player(data.data)
            .then((item) => {
                console.log('approve_player : ' + data.data);
                io.to(data.socket_id).emit('kmaster', res);

                const found = socketList.find(item => item.player_id === data.data);
                if (found !== undefined) {
                    io.to(found.socket_id).emit('player', res);
                }
            })
            .catch(err => {
                console.error('approve_player : ' + err);
            });
        //io.to(data.socket_id).emit('kmaster', res);
    }
}

function client_listener(data) {}

function player_listener(data) {}

http.listen(port, () => {
    console.log(`socket server started on port: ${port}`);
});