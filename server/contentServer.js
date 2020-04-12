const express = require('express');
const app = express();

app.use('/', function(req, res, next) {
    console.log('Content Request ' + Date.now() + ' ' + req.url);
    next();
});

app.use('/', express.static(__dirname + '/contents'));

app.listen(3002, () => console.log('Contents listening on port 3002'));