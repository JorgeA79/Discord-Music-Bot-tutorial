const Discord = require("discord.js");

module.exports = {
  name: "server",
  description: "kiss someone owo",
  execute(client, message, args) {
      
	 const embed = new Discord.MessageEmbed()
	   .setTitle("> Click to join our server <")
  .setColor(0xC76CF5) 
  .setThumbnail("https://cdn.discordapp.com/avatars/370483123848478721/2a073955469d1aefda2ce240ab5d2948.png?size=128")
  .setTimestamp()
  .setURL("https://discord.gg/gwFXT55");
  
  message.channel.send(embed);
	   
  }
};
