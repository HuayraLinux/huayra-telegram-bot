bot.onText(/\/list/, (msg) => {
    let txt = '';
    db.each("SELECT chat_id, name FROM suscripciones", function(err, row) {
      txt = txt + row.name + "\n";
    }, function() {
      bot.sendMessage(msg.chat.id, txt);
  });
});
