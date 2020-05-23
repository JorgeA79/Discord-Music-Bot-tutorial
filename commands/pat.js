const Discord = require("discord.js");

module.exports = {
  name: "pat",
  description: "pat someone owo",
  execute(client, message, args) {
      var hugifs = [
	 "https://media.tenor.com/images/ad8357e58d35c1d63b570ab7e587f212/tenor.gif",
 	 "https://i.imgur.com/4ssddEQ.gif",
 	 "https://thumbs.gfycat.com/FlimsyDeafeningGrassspider-size_restricted.gif",
 	 "https://66.media.tumblr.com/a72dd82535f3e7accd827c202dacc09a/tumblr_pfyiqz0pFL1th206io1_640.gif"];

		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	   var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		
	    const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** patted **${member.user.username}**`)
	    .setColor(0xC76CF5)
            .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   
  }
};
