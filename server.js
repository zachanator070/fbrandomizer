var express = require('express');

var port = 3003;

var server = express();

var bodyParser = require('body-parser')

server.use(bodyParser.json());

server.use(bodyParser.urlencoded({
    extended: false
}));

server.use(express.static('public'));
// server.use('/scores',scores);

server.listen(port, function () {
  console.log('Server listening on '+ port);
});
