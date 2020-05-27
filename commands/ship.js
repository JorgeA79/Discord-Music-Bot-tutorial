const Discord = require("discord.js");

module.exports = {
  name: "ship",
  description: "Stop the music",
  execute(client, message, args) {

	mention = message.mentions.users;
  	mention1 = mention.first();
	mention2 = Array.from(mention)[1].username;
	console.log(mention2);
	if(!mention1){
	return message.reply("Try mentioning the person");	
	}else if(!mention2){
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** matches % with **${mention1.username}**`)
	.setColor(0xC76CF5)
	message.channel.send(embed);
	}else{
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${mention1.username}** matches % with **${mention2}**`)
	.setColor(0xC76CF5)
	message.channel.send(embed);	
	}  
  }
};
