'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

const PORT = process.env.PORT || 8080,
      IP = process.env.IP || 'localhost';

app.use(express.static(__dirname + '/build'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

let BASE_URL = process.env.BASE_URL || '';
const SERVER_ENV = process.env.SERVER_ENV || '';

app.listen( PORT, IP, () => {
    console.log(`Listening on ${IP}:${PORT}`);
});