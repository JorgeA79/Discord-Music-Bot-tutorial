const Discord = require("discord.js");

module.exports = {
  name: "kill",
  description: "kiss someone owo",
  execute(client, message, args) {
      var hugifs = [
	 "https://pa1.narvii.com/5748/8c6805c5fb2172cfdc445ef193a4527f4492012a_hq.gif",
 	 "https://i.chzbgr.com/full/8442235648/h5122C918/whats-the-name-of-that-anime",
 	 "https://imgur.com/r/k_on/VM0TwyH",
 	 "http://img0.joyreactor.com/pics/post/anime-gif-anime-chuunibyou-demo-koi-ga-shitai%21-1388378.gif",
   "http://imgur.com/gallery/ouX2mV6"];

		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	    var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		
	    const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** killed **${member.user.username}**`)
	    .setColor(0xC76CF5)
      .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   
  }
};
