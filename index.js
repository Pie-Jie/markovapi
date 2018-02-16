const express = require('express');
const app = express();
var Twitter = require('twitter');
var dataArr = [];
var tweet;



 var Twit = require('twit');

var T = new Twit({
    consumer_key: 'INSERT CONSUMER KEY HERE',
    consumer_secret: 'INSERT CONSUMER SECRET HERE',
    access_token: 'INSERT ACCESS TOKEN HERE',
    access_token_secret: 'INSERT ACCESS TOKEN SECRET HERE',
    timeout_ms: 60 * 1000,
});
var stream = T.stream('user', { track: 'trump', user_name: 'PieJieD' });

stream.on('message', function (msg) {
    tweet = msg.text;
    dataArr.push(tweet);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getdata', function (req, res) {
    res.send(dataArr);
});

var port = process.env.PORT || 3000;


app.listen(port, function () {
    console.log("Listening on " + port);
});
