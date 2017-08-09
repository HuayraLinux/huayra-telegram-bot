bot.onText(/\/add/, (msg) => { 
  db.run("DELETE FROM suscripciones WHERE chat_id = ?", msg.chat.id);
  db.run("INSERT INTO suscripciones (chat_id,name) VALUES (?,?)", msg.chat.id, msg.chat.username);
  bot.sendMessage(msg.chat.id, 'Agregado');
});
