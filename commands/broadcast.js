bot.onText(/\/broadcast/, (msg) => {
    db.each("SELECT chat_id, name FROM suscripciones", function(err, row) {
      console.log("send to: " + row.chat_id);
      bot.sendMessage(row.chat_id, 'test');
    });
});
