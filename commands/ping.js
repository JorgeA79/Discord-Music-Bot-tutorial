//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");

module.exports = {
  name: "ping",
  description: "Pinging the bot",
  execute(client, message) {
    const embed = new Discord.MessageEmbed()
    .setDescription(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``)
    .setColor(0xC76CF5);
  message.channel.send(embed);
    
}
}
