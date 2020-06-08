const Discord = require("discord.js");

module.exports = {
  name: "invite",
  description: " ",
  execute(client, message, args) {
      
	 const embed = new Discord.MessageEmbed()
	   .setTitle("> Click to invite bot to your server <")
  .setColor(0xC76CF5) 
  .setThumbnail(process.env.BOT_AVATAR)
  .setTimestamp()
  .setURL("https://discord.com/api/oauth2/authorize?client_id=710373309279109129&permissions=2146958704&scope=bot");
  
  message.channel.send(embed);
	   
  }
};
