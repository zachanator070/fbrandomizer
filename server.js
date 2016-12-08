var express = require('express');

var port = 3003;

var server = express();
var request = require('request');

var bodyParser = require('body-parser')

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({
    extended: false
}));

server.use(express.static('public'));

server.get('/url', function(req, res){

  console.log('GET /url');

  var srcs = ['https://reddit.com/r/aww.json',
              'https://reddit.com/r/funny.json',
              'https://reddit.com/r/mildyinteresting.json',
              'https://reddit.com/r/showerthoughts.json'];
  var srcindex = Math.floor((Math.random() * srcs.length) + 0);

  var srcurl = srcs[srcindex]
  console.log(srcurl);

  request.get(srcurl, function (error, response, body) {

    if (!error && response.statusCode == 200) {

      body = JSON.parse(body);
      var index = Math.floor((Math.random() * body.data.children.length) + 0);

      var url = body.data.children[index].data.url;
      var caption = body.data.children[index].data.title;
      res.send({"url": url, "caption": caption});
    }
    else{
      console.log(error);
      res.status(500).send(error);
    }
  });

});

server.listen(port, function () {
  console.log('Server listening on '+ port);
});
