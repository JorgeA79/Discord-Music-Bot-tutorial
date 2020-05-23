const Discord = require("discord.js");

module.exports = {
  name: "shoot",
  description: "Shoot someone owo",
  execute(client, message, args) {
      var hugifs =  [
	 "https://media1.tenor.com/images/cfb7817a23645120d4baba2dcb9205e0/tenor.gif?itemid=5710495",
 	 "https://media1.tenor.com/images/a2df704431ed61fdddc4eb1a06bb728e/tenor.gif?itemid=5359419",
 	 "https://i.pinimg.com/originals/a0/f0/c3/a0f0c3dacfa0962425f34e011d30e9be.gif",
 	 "https://media1.tenor.com/images/63c0c6b632dfffd790b60a87007f1bfd/tenor.gif?itemid=11514589"];
	
 	   var ahugifs =  [
	    "https://i.gifer.com/XYbf.gif"];		
    
	    let member = message.mentions.members.first();
	    if(!member) 
	    return message.reply("Try mentioning the person");	
	
     	
	   var selecthugGif = hugifs[Math.floor(Math.random() * hugifs.length)];
	   var selectahugGif = ahugifs[Math.floor(Math.random() * ahugifs.length)];
		
	   if(message.author.username == member.user.username){	

	   const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** shot itself...`)
	    .setColor(0xC76CF5)
            .setImage(selectahugGif);
	    message.channel.send(embed);	   
	   }else{
	    const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** shot **${member.user.username}**`)
	    .setColor(0xC76CF5)
            .setImage(selecthugGif);
	    message.channel.send(embed);
	   
	   }
  }
};
