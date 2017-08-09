const TelegramBot = require('node-telegram-bot-api');
execSync = require('child_process').execSync;
var messenger = require('messenger');



var config = require('./bot.config.json');
 
const sqlite3 = require('sqlite3').verbose();
db = new sqlite3.Database('bot.sqlite');

// Create a bot that uses 'polling' to fetch new updates 
bot = new TelegramBot(config.token, {polling: true});

console.log('Listen cmd server on port: 8678');
server = messenger.createListener('127.0.0.1:8678');

server.on('broadcast', function(message, data){
  message.reply({'status': 'ok'});
  db.each("SELECT chat_id, name FROM suscripciones", function(err, row) {
    console.log(data);
    console.log(row.name);
    //bot.sendMessage(msg.chat.id, txt);
  });
});

// Cargamos todos los comandos
var normalizedPath = require("path").join(__dirname, "commands");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  console.log('Loading command: ' + file);
  require("./commands/" + file);
});

// Listen for any kind of message. There are different kinds of 
// messages. 
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(msg.chat.id, 'Sanguche de vacio');
  console.log(msg.from.username + ': ' + msg.text + "\n");
});

db.on("error", function(error) {
    console.log("Getting an error : ", error);
}); 

bot.on('polling_error', (error) => {
  console.log(error.code);  // => 'EFATAL'
});
