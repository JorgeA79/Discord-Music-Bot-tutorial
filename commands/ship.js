const Discord = require("discord.js");

module.exports = {
  name: "ship",
  description: "Stop the music",
  execute(client, message, args) {

	mention = message.mentions.users;
  	mention1 = mention.first();
	mention2 = mention.last();
	console.log(mention2);
	var percentage = Math.floor(Math.random() * 100) + 1; 
	const desc = "";  
	
	if(percentage > 0 && percentage <10) {
	desc = ":black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square:";
	}else if(percentage > 10 && percentage <20) {
	desc = ":white_medium_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square:";
	}else if(percentage > 20 && percentage <30) {	
	desc = ":white_medium_square: :white_medium_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square:";
	}else if(percentage > 30 && percentage <40) {
	desc = ":white_medium_square: :white_medium_square: :white_medium_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square:";
	}else if(percentage > 40 && percentage <50) {
	desc = ":white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square:";
	}else if(percentage > 50 && percentage <60) {
	desc = ":white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square:";
	}else if(percentage > 60 && percentage <70) {
	desc = ":white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :black_large_square: :black_large_square: :black_large_square: :black_large_square:";
	}else if(percentage > 70 && percentage <80) {
	desc = ":white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :black_large_square: :black_large_square: :black_large_square:";
	}else if(percentage > 80 && percentage <90) {
	desc = ":white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :black_large_square: :black_large_square:";
	}else if(percentage > 90 && percentage <100) {
	desc = ":white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :black_large_square:";
	}else if(percentage == 100) {
	desc = ":white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square: :white_medium_square:";	
	}
	  
	  
	if(mention1 == mention2){
	mention2 = "";
	}
	  
	if(!mention1){
	return message.reply(`Try mentioning the person`);	
	}else if(!mention2){
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** matches % with **${mention1.username}** \n**${percentage}%** `+ desc)
	.setColor(0xC76CF5)
	message.channel.send(embed);
	
	}else{
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${mention1.username}** matches % with **${mention2.username}**`)
	.setColor(0xC76CF5)
	message.channel.send(embed);	
		
	}  
  }
};
