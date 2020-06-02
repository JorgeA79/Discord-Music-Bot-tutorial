const Discord = require('discord.js');

module.exports = {
	name: 'args',
	description: 'Hugging.',
	cooldown: 5,
	execute(message) {
  
		const args = message.content.slice(PREFIX.length).split(` `);
    if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	   }
    
    message.channel.send(args.splice(1).join(" "));
    
	}
};
