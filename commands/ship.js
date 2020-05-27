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
	var desc = "";  
	
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
	
	if(message.author.id =="304357538101723137" && mention1.id == "360207757787398145"){
		
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** has a Perfect match with **${mention1.username}** \n**Perfect** :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: `)
	.setColor(0xC76CF5)
	message.channel.send(embed);
		
	}else if(message.author.id =="360207757787398145" && mention1.id == "304357538101723137"){
		
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** has a Perfect match with **${mention1.username}** \n**Perfect** :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: `)
	.setColor(0xC76CF5)
	message.channel.send(embed);
		
	}else if(message.author.id =="206606985167110145" && mention1.id == "438185201844224001"){
		
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** has a Perfect match with **${mention1.username}** \n**Perfect** :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: `)
	.setColor(0xC76CF5)
	message.channel.send(embed);
		
	}else if(message.author.id =="438185201844224001" && mention1.id == "206606985167110145"){
		
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** has a Perfect match with **${mention1.username}** \n**Perfect** :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: `)
	.setColor(0xC76CF5)
	message.channel.send(embed);
		
	}
		
		
		
		
		
	else{	
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${message.author.username}** matches ${percentage}% with **${mention1.username}** \n**${percentage}%** `+ desc)
	.setColor(0xC76CF5)
	message.channel.send(embed);
	}
		
		
	}else if(mention1.id == "304357538101723137" && mention2.id == "360207757787398145"){
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${mention1.username}** has a Perfect match with **${mention2.username}** \n**Perfect** :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: `)
	.setColor(0xC76CF5)
	message.channel.send(embed);
	}else if(mention1.id == "360207757787398145" && mention2.id == "304357538101723137"){
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${mention1.username}** has a Perfect match with **${mention2.username}** \n**Perfect** :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: `)
	.setColor(0xC76CF5)
	message.channel.send(embed);
	}else if(mention1.id == "206606985167110145" && mention2.id == "438185201844224001"){
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${mention1.username}** has a Perfect match with **${mention2.username}** \n**Perfect** :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: `)
	.setColor(0xC76CF5)
	message.channel.send(embed);
	}else if(mention1.id == "438185201844224001" && mention2.id == "206606985167110145"){
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${mention1.username}** has a Perfect match with **${mention2.username}** \n**Perfect** :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: :green_square: `)
	.setColor(0xC76CF5)
	message.channel.send(embed);
	}  
	else{
	const embed = new Discord.MessageEmbed()
        .setDescription(`**${mention1.username}** matches ${percentage}% with **${mention2.username}** \n**${percentage}%** `+ desc)
	.setColor(0xC76CF5)
	message.channel.send(embed);	
		
	}  
  }
};
