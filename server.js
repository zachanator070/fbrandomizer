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

  request.get('https://reddit.com/r/aww.json', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(body) // Show the HTML for the Google homepage.

      body = JSON.parse(body);
      var index = Math.floor((Math.random() * body.data.children.length) + 0);;

      var url = body.data.children[index].data.url;
      var caption = body.data.children[index].data.title;
      res.send({"url": url, "caption": caption});
    }
    else{
      res.status(500).send(response);
    }
  })

});

server.listen(port, function () {
  console.log('Server listening on '+ port);
});
