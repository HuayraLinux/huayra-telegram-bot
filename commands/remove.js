bot.onText(/\/remove/, (msg) => { 
  db.run("DELETE FROM suscripciones WHERE chat_id = ?", msg.chat.id);
  bot.sendMessage(msg.chat.id, 'Removido');
});
