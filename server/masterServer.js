const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;
const monggo = require('./monggoconnect');
const bcrypt = require('bcrypt');
const router = express.Router();
const bodyParser = require('body-parser');
const { uuid } = require('uuidv4');
var cors = require('cors');

app.use(express.static(__dirname + '/master'));
app.use('/config', express.static(__dirname + '/static/config'));
app.use('/', express.static(__dirname + '/master'));

app.use(cors());
app.use(bodyParser.json());
app.use('/master', router);

router.post('/login', function(req, res) {
    const body = req.body;
    console.log(body);
    const username = body.log_in.username;
    const password = body.log_in.password;

    monggo.findMasterName(username)
        .then((item) => {
            console.log(item);
            if (item) {
                if (compare_password(password, item.password)) {
                    res.json({ data: { result: "success", data: { current_master_id: item.master_id } } });
                } else {
                    res.json({ data: { result: "error", data: "wrong password" } });
                }
            } else {
                res.json({ data: { result: "error", data: "please register" } });
            }
        })
        .catch(err => {
            res.json({ data: { result: "error", data: "please register" } });
        });
});

router.post('/register', function(req, res) {
    const body = req.body;
    console.log(body);

    const masteruser = {
        username: body.register.username,
        email: body.register.email,
        password: encrypt_password(body.register.password),
        role: body.register.role,
        master_id: uuid()
    };

    monggo.addMasterUser(masteruser)
        .then((item) => {
            res.json({ data: { result: "success", data: item } });
        })
        .catch(err => {
            console.error('addPlayer error: ' + err);
            res.json({ data: { result: "error", data: err } });
        });
});

function encrypt_password(password) {
    var hashPassword = bcrypt.hashSync(password, 10);
    return hashPassword;
}

function compare_password(password, hash_password) {
    if (bcrypt.compareSync(password, hash_password)) {
        return true;
    } else {
        return false;
    }
}

function find_username(username) {
    monggo.findMasterName(username)
        .then((item) => {
            return item;
        })
        .catch(err => {
            return err;
        });
}

function find_email(email) {
    monggo.findMasterEmail(email)
        .then((item) => {
            resolve(item);
        })
        .catch(err => {
            reject("error");
        });
}

http.listen(port, () => {
    console.log('Master server listening on port ' + port)
});