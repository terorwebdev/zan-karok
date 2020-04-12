const express2 = require('express');
const app2 = express2();
const http2 = require('http').Server(app2);
const port2 = process.env.PORT || 3001;
var cors2 = require('cors');

app2.use(express2.static(__dirname + '/client'));
app2.use('/config', express2.static(__dirname + '/static/config'));

app2.use(cors2());

http2.listen(port2, () => {
    console.log('Client listening on port ' + port2);
});