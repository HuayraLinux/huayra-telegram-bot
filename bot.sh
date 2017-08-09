#!/bin/bash

# Test de requisitos

for prg in jq sqlite3 dirname curl realpath; do

    found=`which $prg`
    if [ -z "$found" ]; then
        echo "ERROR: Dependencias inclumplidas, debe tener instalado el comando: $prg"
        exit 1
    fi
done

curpwd=`dirname $0`
curpwd=`realpath $curpwd`

TOKEN=`cat $curpwd/bot.config.json | jq -r .token`

URL="https://api.telegram.org/bot$TOKEN/sendMessage"
TEXT=$(cat)

if [ -z "$TEXT" ]; then
    echo "ERROR: Mensaje vacío"
    exit 1
fi

echo "Enviar mensaje: $TEXT"

for a in `$curpwd/sqlite3 bot.sqlite "SELECT chat_id FROM suscripciones"` ; do
    CHATID=$a
    echo "Para: $CHATID"
    curl -s --max-time $TIME -d "chat_id=$CHATID&disable_web_page_preview=1&text=$TEXT" $URL >/dev/null
done

