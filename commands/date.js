const Discord = require("discord.js");

module.exports = {
  name: "date",
  description: "Date someone owo",
  execute(client, message, args) {
  let member = message.mentions.members.first();
		 if(!member) 
		return message.reply("Try mentioning the person");	
		
		  message.channel.send(`**${message.author.username}** dated **${member.user.username}**`);
		const embed = new Discord.RichEmbed()
  		 .setColor(0xC76CF5)
  		.setImage("https://media1.tenor.com/images/e0f8ceace2d85bcdc36fe6d74f649b9f/tenor.gif?itemid=13300869");
   message.channel.send(embed);
  }
};
