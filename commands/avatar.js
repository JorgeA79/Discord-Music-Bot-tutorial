const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Pinging the bot",
  execute(client, message) {


    let target = message.mentions.users.first() || message.author; 
      let image = ""
          const embed = new Discord.MessageEmbed()
            			  .setTitle(`**${target.username}**`)
                    .setDescription(`[Avatar URL](target.displayAvatarURL({ format: 'jpg' }))`)
	    		          .setColor(0xC76CF5)
            		    .setImage(target.displayAvatarURL({ format: 'jpg' }));
      
    message.channel.send(embed);  

  
    

}
}
