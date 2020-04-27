const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3001;
var cors = require('cors');

app.use(express.static(__dirname + '/client'));
app.use('/config', express.static(__dirname + '/static/config'));
app.use('/assets', express.static(__dirname + '/client/assets'));

app.use(cors());

http.listen(port, () => {
    console.log('Client server listening on port ' + port);
});