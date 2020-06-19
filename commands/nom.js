const Discord = require("discord.js");

module.exports = {
  name: "nom",
  description: "kiss someone owo",
  execute(client, message, args) {
      var hugifs = [
	       "https://media.tenor.com/images/6b62fa91af004f8a8f232c18f6ca2e7b/tenor.gif",
 	       "https://66.media.tumblr.com/35a1a39e5832dee49e04f4958b4e9381/tumblr_omss2uGQI21v9ypo0o1_500.gifv",
 	       "https://imgur.com/BsECK1D.gif",
      	 "https://24.media.tumblr.com/35fbf342a43d063434a5cfff5281781a/tumblr_mnlssnE89S1s2530go1_500.gif",
      	 "https://i.chzbgr.com/full/8324406016/hD54E2ACA/om-nom",
     	   "https://media.giphy.com/media/132tfJl4NAMiU8/giphy.gif"];

		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	    var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		
	    const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** nom noms at **${member.user.username}**`)
	    .setColor(0xC76CF5)
      .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   
  }
};
