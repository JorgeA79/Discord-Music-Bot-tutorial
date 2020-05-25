const Discord = require("discord.js");

module.exports = {
  name: "flip",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  if(args[0] == "tail"){
    var result = Math.floor((Math.random() * 2) + 1);
    	      if (result == 1) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`I wooooon uwu <:wholesomekermit:705354033799364628> `)
            .setTitle("Head")
            .setColor(0xC76CF5)
            .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif");
            message.channel.send(embed);
            } else if (result == 2) {
    		    const embed = new Discord.MessageEmbed()
            .setTitle("Tail")
            .setDescription("`You got me <:wholesomekermit:705354033799364628> `")
            .setColor(0xC76CF5)
            .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif");
            message.channel.send(embed);
    	      }	
    
    }else if(args[0] == "head"){
        var result = Math.floor((Math.random() * 2) + 1);
    	      if (result == 1) {
            const embed = new Discord.MessageEmbed()
            .setDescription(`I wooooon uwu <:wholesomekermit:705354033799364628> `)
            .setTitle("Head")
            .setColor(0xC76CF5)
            .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif");
            message.channel.send(embed);
            } else if (result == 2) {
    		    const embed = new Discord.MessageEmbed()
            .setTitle("Tail")
            .setDescription("`You got me <:wholesomekermit:705354033799364628> `")
            .setColor(0xC76CF5)
            .setImage("https://68.media.tumblr.com/4c0e4d4f186433f84ad11109f0b619b2/tumblr_np6oolnI2c1td4t64o1_500.gif");
            message.channel.send(embed);
    	      }	 
    }else{
     message.channel.send("no");
    
    }
}
}
