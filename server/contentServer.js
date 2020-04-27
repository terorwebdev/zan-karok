const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3002;
const bodyParser = require('body-parser');
const monggo = require('./monggoconnect');
const router = express.Router();
var cors = require('cors');
app.use(cors());

app.use('/', function(req, res, next) {
    console.log('Content Request ' + Date.now() + ' ' + req.url);
    next();
});

app.use('/', express.static(__dirname + '/contents'));

app.use(bodyParser.json());
app.use('/content', router);

router.get('/file/:id', function(req, res) {
    var id = req.params.id;
    monggo.findFileId(id)
        .then((item) => {
            res.json({ result: "success", data: item });
        })
        .catch(err => {
            console.log('Monggodb findAll Error :' + err);
            res.json({ result: "error", data: {} });
        });
});

router.get('/list', function(req, res) {
    monggo.findAll()
        .then((item) => {
            res.json({ result: "success", data: item });
        })
        .catch(err => {
            console.log('Monggodb findAll Error :' + err);
            res.json({ result: "error", data: [] });
        });
});

http.listen(port, () => {
    console.log('Contents Server listening on port 3002');
});