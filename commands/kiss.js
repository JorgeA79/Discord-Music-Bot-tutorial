const Discord = require("discord.js");

module.exports = {
  name: "kiss",
  description: "kiss someone owo",
  execute(client, message, args) {
      var hugifs = [
	 "https://media1.tenor.com/images/ef4a0bcb6e42189dc12ee55e0d479c54/tenor.gif?itemid=12143127",
 	 "https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif",
 	 "https://media.tenor.com/images/de18124ebe36764446ee2dbf54a672bf/tenor.gif",
 	 "https://lifeo.ru/wp-content/uploads/gif-anime-kisses-26.gif"];

		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	   var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		
	    const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** kissed **${member.user.username}**`)
	    .setColor(0xC76CF5)
            .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   
  }
};
