const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '644425603:AAFsR-MIvFsv1hKGM8CVZe1YQSDpTW83LUY';
const bot = new TelegramBot(TOKEN, {polling: true});
//var notes = [];
bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name}, your id ${msg.from.id}`);
});
bot.on("/help", msg => {
	bot.sendMessage(msg.chat.id, `Помощь не работает, тебе уже ничего не поможет.`);
});
/* bot.onText(/напомни (.+) в (.+)/,function(msg,match){
	var userId=msg.from.id;
	var text=match[1];
	var time=match[2];

	notes.push({'uid':userId,'time':time,'text':text});
	bot.sendMessage(userId,'Отлично! Я обязательно напомню, если не сдохну :)');
});

setInterval(function(){
	for(var i=0;i<notes.length;i++){
		var curDate=new Date().getHours()+':'+new Date().getMinutes();
		if(notes[i]['time']==curDate){
			bot.sendMessage(notes[i]['uid'],'Напоминаю, что вы должны: '+notes[i]['text']+' сейчас.');
			notes.splice(i,1);}
		}
	},1000
); */

