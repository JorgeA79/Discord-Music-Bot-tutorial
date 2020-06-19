const Discord = require("discord.js");

module.exports = {
  name: "stare",
  description: "kiss someone owo",
  execute(client, message, args) {
      var hugifs = [
	 "https://media1.tenor.com/images/3e53c38c053b68475a899ef7c6398a85/tenor.gif?itemid=14080506",
 	 "https://media1.tenor.com/images/afd4282d996325f5da7be3c2c963df41/tenor.gif?itemid=4686978",
 	 "https://media1.tenor.com/images/88290d24dc21e2e8f07825fdd8823760/tenor.gif?itemid=9780126",
 	 "https://thumbs.gfycat.com/EnchantingHandyCusimanse-size_restricted.gif",
   "https://media1.tenor.com/images/1b42b934b2cb4a4d68004056762514d0/tenor.gif?itemid=12387055",
   "https://media1.giphy.com/media/l1rDFht4dIHni/source.gif",
   "https://i.pinimg.com/originals/d1/0f/56/d10f561068060b7175ba14b9ebef409e.gif"];

		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	   var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		
	    const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** stares at **${member.user.username}**`)
	    .setColor(0xC76CF5)
      .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   
  }
};
