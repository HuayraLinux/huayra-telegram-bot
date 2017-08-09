# Bot de telegram para Huayra-dev

Este bot lo estamos haciendo para recibir la notificaciones cuando se suben paquetes
al repo de Huayra.
Está hecho con NodeJS y subimos éste código para fines educativos.

Archivo              | Descripción
-------------------- | -----------------------------------
bot.js               | Codigo principal del bot
commands/            | Directorio con archivos por comando
bot.schema           | Esquema de base de datos sqlite
bot.config.json-dist | Configuración 
botcmd.js            | CLI para manejar el proceso del bot
bot.sh               | CLI para enviar mensajes desde scripts externos

## Instalación

Ejecutar npm install para instalar las dependencias de node

cp bot.config.json-dist bot.config.json

Modificar el archivo bot.config.json con el TOKEN del bot de telegram





