const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '644425603:AAFsR-MIvFsv1hKGM8CVZe1YQSDpTW83LUY';
const bot = new TelegramBot(TOKEN, {polling: true});
//var notes = [];
bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name} your id ${msg.from.id}`);
});



