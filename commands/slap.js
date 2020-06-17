const Discord = require("discord.js");

module.exports = {
  name: "slap",
  description: "slap someone owo",
  execute(client, message, args) {
      var hugifs =  [
	    "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
 	    "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
 	    "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif",
      		"https://giphy.com/gifs/slap-yuru-yuri-Zau0yrl17uzdK",
      		"https://giphy.com/gifs/Gf3AUz3eBNbTW",
      		"https://giphy.com/gifs/food-sailor-moon-RXGNsyRb1hDJm",
      		"https://giphy.com/gifs/slapping-crying-tX29X2Dx3sAXS",
      		"https://giphy.com/gifs/love-lab-m6etefcEsTANa"];
		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	   var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		
	    const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** slapped **${member.user.username}**`)
	    .setColor(0xC76CF5)
            .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   
  }
};
