const express = require('express');
const app = express();
const formidable = require('formidable');
const mongo = require('mongodb');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const router = express.Router();

var cors = require('cors');

app.use(express.static(__dirname + '/public'));
app.use(cors());

function onConnection(socket) {
    console.log("Socket.id : " + socket.id);

    socket.on('k-master', (data) => {
        socket.broadcast.emit('k-master', data);
    });

    socket.on('k-client', (data) => {
        socket.broadcast.emit('k-client', data);
    });

    socket.on('disconnect', function() {
        const item = { type: 'Disconnect', id: socket.id };
        console.log("Disconnected", item);
    });
}

io.on('connection', onConnection);

router.get('/k-master', function() {
    app.use(express.static(__dirname + '/master'));
    app.use(cors());
});

router.get('/k-client', function() {
    app.use(express.static(__dirname + '/client'));
    app.use(cors());
});

app.use('/api', router);

http.listen(port, () => {
    console.log('listening on port ' + port)
});