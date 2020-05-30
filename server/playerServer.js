const express = require('express');
const { uuid } = require('uuidv4');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3005;
const router = express.Router();
const monggo = require('./monggoconnect');
const bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use('/player', router);

router.post('/login', function(req, res) {
    const body = req.body;
    console.log(body);

    var player_name = body.log_in.player_name;

    monggo.findPlayerName(player_name)
        .then((item) => {
            // console.log('findPlayerName : ' + item);
            if (item === null) {
                const player = {
                    player_name: player_name,
                    player_id: uuid(),
                    registered: false
                };
                monggo.addPlayer(player)
                    .then((item) => {
                        const response = {
                            registered: item.registered,
                            player_name: item.player_name,
                            player_id: item.player_id
                        };
                        res.json({ data: { result: "success", data: response } });
                    })
                    .catch(err => {
                        console.error('addPlayer error: ' + err);
                        res.json({ data: { result: "error", data: err } });
                    });
            } else {
                const response = {
                    registered: item.registered,
                    player_name: item.player_name,
                    player_id: item.player_id
                };
                res.json({ data: { result: "success", data: response } });
            }
        })
        .catch(err => {
            res.json({ data: { result: "error", data: err } });
        });
});

http.listen(port, () => {
    console.log('Player Server listening on port ' + port)
});