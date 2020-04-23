const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on('ready', () => {
    console.log('HyperUtilities Bot Ready.');
});

Client.on('message', message => {
    if(message.content === 'ping') {
        message.reply('pong');
    }
});

Client.login(process.env.BOT_TOKEN);