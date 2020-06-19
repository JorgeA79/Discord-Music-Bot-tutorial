const Discord = require("discord.js");

module.exports = {
  name: "poke",
  description: "kiss someone owo",
  execute(client, message, args) {
      var hugifs = [
	 "https://media.tenor.com/images/6d227fd93656bd164985aad517a25c3f/tenor.gif",
 	 "https://media1.tenor.com/images/3b9cffb5b30236f678fdccf442006a43/tenor.gif?itemid=7739077",
 	 "https://i.pinimg.com/originals/b4/95/fb/b495fb19f4b9a1b04f48297b676c497b.gif",
 	 "https://i.gifer.com/SKql.gif",
   "https://media1.tenor.com/images/e8b25e7d069c203ea7f01989f2a0af59/tenor.gif?itemid=12011027",
   "https://media1.giphy.com/media/FdinyvXRa8zekBkcdK/giphy.gif"];

		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	   var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
		
	    const embed = new Discord.MessageEmbed()
      .setDescription(`**${message.author.username}** pokes **${member.user.username}**`)
	    .setColor(0xC76CF5)
      .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   
  }
};
