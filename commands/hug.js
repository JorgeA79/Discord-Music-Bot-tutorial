const Discord = require("discord.js");

module.exports = {
  name: "hug",
  description: "Hug someone owo",
  execute(client, message, args) {
      var hugifs =  [
	    	"https://media.tenor.com/images/b6d0903e0d54e05bb993f2eb78b39778/tenor.gif",
 	    	"https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif",
 	    	"https://i.imgur.com/r9aU2xv.gif",
 	    	"https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif"];
	
 	   var ahugifs =  [
	    "https://media0.giphy.com/media/ArLxZ4PebH2Ug/200.gif",
 	    "https://i.pinimg.com/originals/4b/48/78/4b487843dc36e644b570a1ecb96c9de6.gif",
 	    "https://media.giphy.com/media/RFxE6d7EuTCgw/giphy.gif"];		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	   var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
	   var selectahugGif = ahugifs[Math.floor(Math.random() * ahugifs.length)];
		
	   if(message.author.username == member.user.username){	

	   const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** hugged itself...`)
	    .setColor(0xC76CF5)
            .setImage(selectahugGif);
	    message.channel.send(embed);	   
	   }else{
	    const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** hugged **${member.user.username}**`)
	    .setColor(0xC76CF5)
            .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   }
  }
};
