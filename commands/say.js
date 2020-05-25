//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");

module.exports = {
  name: "say",
  description: "Pinging the bot",
  execute(client, message) {
  
const args = message.content.slice('p!').split(' ');
		message.delete(1000);
  
    const embed = new Discord.MessageEmbed()
    .setDescription(args.splice(1).join(" "))
    .setColor(0xC76CF5);
    message.channel.send(embed);
    
}
}
