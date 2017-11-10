const express = require('express');
const app = express();
var Twitter = require('twitter');
var dataArr = [];
var tweet;



 var Twit = require('twit');

var T = new Twit({
  consumer_key:         'Zh89x9BRtSBeBwYrvHtsNxdEv',
  consumer_secret:      'cmCfoDrOp67u7a8bsY0sB6fk0Aayhql41ZrVNFBEtqgK4FYEHx',
  access_token:         '42051552-prICERMck8rcpPKYG38fcSHggHuQ2vijI8Ro4mmDf',
  access_token_secret:  'mQmlRdOAirzXiBG2SHf8hwUSA25t2KHBVUN58K1Klongm',
  timeout_ms:           60*1000,  
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