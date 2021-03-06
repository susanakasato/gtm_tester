const express           = require('express');
const path              = require('path');
const {getNextOption}   = require('../utils/utils');

const app = express();

const states = ['stop', 'play'];
let server;
let port;

app.get("/*", function(req, res) {
    res.sendFile(path.resolve(__dirname + '../../templates' + req.url));
});

const playServer = () => {
    server = app.listen(port);
};

const stopServer = () => {
    server.close();
};

const runServer = (runPort) => {
    port = runPort;
    if(getNextOption(states) == "play") {
        playServer();
    } else {
        stopServer();
    }
}

module.exports = runServer;