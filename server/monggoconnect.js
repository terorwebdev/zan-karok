var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/zankarok";

activate();

function activate() {
    startconnection();
}

function startconnection() {
    const options = {
        keepAlive: 1,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    };

    MongoClient.connect(url, options)
        .then((db) => {
            console.log('DB created/connected');
            // add to log
            // console.log('Connection Info :', db);
            // db.close();
        })
        .catch(err => {
            console.log('DB Connection Error :' + err.message);
            setTimeout(function() {
                console.log('Reconnect DB');
                startconnection();
            }, 3000)
        });
}