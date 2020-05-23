const Discord = require("discord.js");

module.exports = {
  name: "dance",
  description: "Dance with someone owo",
  execute(client, message, args) {
  let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		  message.channel.send(`**${message.author.username}** is dancing with **${member.user.username}**`);
		const embed = new Discord.MessageEmbed()
  		 .setColor(0xC76CF5)
  		.setImage("https://cdn.lowgif.com/full/0e7bb3437e9b4f2a-are-na-anime-dance-gif-7-gif.gif");
   message.channel.send(embed);
  }
};
