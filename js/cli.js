var pingPong = require('./ping-pong.js').pingPong;
var prompt = require('prompt');
prompt.start();

prompt.get('goal', function(err, result) {
  result = pingPong(result.goal);
  result.forEach(function(element) {
    console.log(element);
  });

});
