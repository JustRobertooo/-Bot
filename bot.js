const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDYxMTAyNzU4NTE1MzEwNjAz.DhO-6g.PEr6Kp03aVyKPiHxzHV5Ge8rFgo);
