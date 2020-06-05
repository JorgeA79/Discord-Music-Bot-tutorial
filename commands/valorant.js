//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const fs = require("fs");

var contents = fs.readFileSync("./commands/agents/agents.json");
var jsonContent = JSON.parse(contents);


module.exports = {
  name: "valorant",
  description: "Pinging the bot",
  execute(client, message) {
    const embed = new Discord.MessageEmbed()
    .setDescription(`${jsonContent.name}, ${jsonContent.abilities}, ${jsonContent.type}`)
    .setThumbnail(jsonContent.thumbnail)
    .setImage(jsonContent.image)
    .setColor(0xC76CF5);
  message.channel.send(embed);
    
}
}
