"use strict";
var messages = require('../handlers/config.json');

function Handler(err, req, res, next) {
    if (err && !res.statusCode){
        res.status(err.status || res.statusCode || 500);
        res.sender(messages.server);
    }
}

module.exports = Handler;
