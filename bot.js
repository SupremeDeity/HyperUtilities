// This line MUST be first, for discord.js to read the process envs!
require('dotenv').config(); 
const Discord = require("discord.js");
const client = new Discord.Client();

var ping = require('ping');

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (message.author.bot) return;
  // The process.env.PREFIX is your bot's prefix in this case.
  if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  // This is the usual argument parsing we love to use.
  const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // And our 2 real basic commands!
  if(command === 'ping') {
	  var ping = "Server Ping: " + (Date.now() - message.createdTimestamp) + " ms\n API: " + Math.round(client.ping) + " ms";
    message.channel.send(ping);
  } else
  if (command === 'alive') {
    var hosts = ['43.251.182.19'];
	hosts.forEach(function(host){
    var ms = "Checking: " + host; 
    message.channel.send()
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        message.channel.send(msg);
    });
});
  }
});

// There's zero need to put something here. Discord.js uses process.env.CLIENT_TOKEN if it's available,
// and this is what is being used here. If on discord.js v12, it's DISCORD_TOKEN
client.login();