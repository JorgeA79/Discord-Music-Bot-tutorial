
const Discord = require("discord.js");

module.exports = {
  name: "wave",
  description: "wave someone owo",
  execute(client, message, args) {
      var hugifs = [
	 "https://media.tenor.com/images/6870fd2f3f7be6bc6f08083a899c4889/tenor.gif",
 	 "https://media.giphy.com/media/VUC9YdLSnKuJy/giphy.gif",
 	 "https://vignette.wikia.nocookie.net/project-pokemon/images/a/a5/Wave_by_monnick-d7i06j2.gif/revision/latest?cb=20170428155931",
 	 "https://media.tenor.com/images/4b9b18c7aae49b108354a22a0cb615fc/tenor.gif"];

		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	   var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		
	    const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** waved **${member.user.username}**`)
	    .setColor(0xC76CF5)
            .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   
  }
};
