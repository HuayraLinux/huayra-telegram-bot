bot.onText(/\/status/, (msg) => {
    db.get("SELECT chat_id, name FROM suscripciones WHERE chat_id = ?", msg.chat.id, function(err, row) {
        if (row == undefined) {
            bot.sendMessage(msg.chat.id, 'Suscripcion: Inactivo');
        }
        else {
            bot.sendMessage(msg.chat.id, 'Suscripcion: Activo');
        }
        
    });
});
