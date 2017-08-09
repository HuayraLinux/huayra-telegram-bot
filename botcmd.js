var messenger = require('messenger');

client = messenger.createSpeaker('127.0.0.1:8678');


var t = setTimeout(function(){
  // request here instead of shout to only access 1 server
  clearTimeout(t);
  client.request('broadcast', {some: 'data'}, function(data){
  clearTimeout(t);
    console.log(data);
  });
}, 1000);
