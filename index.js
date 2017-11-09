const express = require('express');
const app = express();
var Twitter = require('twitter');
var dataArr = [];



 var Twit = require('twit');

var T = new Twit({
  consumer_key:         'Zh89x9BRtSBeBwYrvHtsNxdEv',
  consumer_secret:      'cmCfoDrOp67u7a8bsY0sB6fk0Aayhql41ZrVNFBEtqgK4FYEHx',
  access_token:         '42051552-prICERMck8rcpPKYG38fcSHggHuQ2vijI8Ro4mmDf',
  access_token_secret:  'mQmlRdOAirzXiBG2SHf8hwUSA25t2KHBVUN58K1Klongm',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

//
//  filter the twitter public stream by the word 'mango'.
//
var stream = T.stream('user', { track: 'trump', user_name: 'PieJieD' });

stream.on('message', function (msg) {
    //console.log(msg.text);
    tweet = msg.text;
    dataArr.push(tweet);
});
var data2send = {
    Mr_Robot: "hello_friend"
};

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getdata', function (req, res) {
    res.send(dataArr);
    console.log('getting data');
});

var port = process.env.PORT || 3000;


app.listen(port, function () {
    console.log("Listening on " + port);
});