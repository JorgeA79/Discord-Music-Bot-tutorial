const Discord = require('discord.js');

module.exports = {
	name: 'args',
	description: 'Hugging.',
	cooldown: 5,
	execute(message) {
  		const PREFIX = "p!";
		const argsxd = message.content.slice(PREFIX.length).split(` `);
    		if (!argsxd.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	   	}
    
    message.channel.send(argsxd.splice(1).join(" "));
    
	}
};
