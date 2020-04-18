const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const formidable = require('formidable');

var cors = require('cors');

app.use(express.static(__dirname + '/master'));
app.use('/config', express.static(__dirname + '/static/config'));
app.use('/', express.static(__dirname + '/master'));

app.use(cors());

http.listen(port, () => {
    console.log('Master listening on port ' + port)
});