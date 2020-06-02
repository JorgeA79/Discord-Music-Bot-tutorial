const Discord = require("discord.js");

module.exports = {
  name: "server",
  description: "kiss someone owo",
  execute(client, message, args) {
      
	 const embed = new Discord.MessageEmbed()
	   .setTitle("> Click to join our server <")
  .setColor(0xC76CF5) 
  .setThumbnail(process.env.BOT_AVATAR)
  .setTimestamp()
  .setURL("https://discord.gg/gwFXT55");
  
  message.channel.send(embed);
	   
  }
};
