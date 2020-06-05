//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const fs = require("fs");

var contents = fs.readFileSync("./commands/agents/agents.json");
var jsonContent = JSON.parse(contents);


module.exports = {
  name: "valorant",
  description: "Pinging the bot",
  execute(client, message, args) {
    
    
    const title = args[1];
    const embed = new Discord.MessageEmbed()
    .setTitle("Valorant Agents")
    .setDescription(`${jsonContent.emote} - **${jsonContent.name}'s** agent info`)
    .addField("Name:", `${jsonContent.name}`, true)
    .addField("Type:", `${jsonContent.type}`, true)
    .setThumbnail(jsonContent.thumbnail)
    .setImage(jsonContent.image)
    .setColor(0xC76CF5);
  message.channel.send(embed);
    
}
}
