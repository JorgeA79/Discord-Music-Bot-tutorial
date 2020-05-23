const Discord = require("discord.js");

module.exports = {
  name: "protect",
  description: "kiss someone owo",
  execute(client, message, args) {
      var hugifs =  [
	 "https://i.gifer.com/3cA2.gif",
 	 "https://bigmemes.funnyjunk.com/gifs/Protect+the+cinnamon+roll_7619b3_6456881.gif"];

		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	   var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		
	    const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** protected **${member.user.username}**`)
	    .setColor(0xC76CF5)
            .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   
  }
};
