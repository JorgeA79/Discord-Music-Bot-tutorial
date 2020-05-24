const Discord = require("discord.js");

module.exports = {
  name: "flip head",
  description: "Shoot someone owo",
  execute(client, message, args) {
  
      var result = Math.floor((Math.random() * 2) + 1);
    	if (result == 1) {
    		const embed = new Discord.MessageEmbed()
        .setTitle("Head")
        .setColor(0xC76CF5)
        .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif");

         message.channel.send(embed);
		    message.channel.send(`You got me <:wholesomekermit:705354033799364628>`);
    	  } else if (result == 2) {
    		const embed = new Message.RichEmbed()

        .setTitle("Tail")
        .setColor(0xC76CF5)
        .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif");
		
      message.channel.send(embed);
		  message.channel.send(`WOOOOOOOOOOO <:wholesomekermit:705354033799364628>`);
    	}
  
  }
};
