const Discord = require("discord.js");

module.exports = {
  name: "about",
  description: "Pinging the bot",
  execute(client, message) {
  
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`Pixel Bot`)
    .setDescription(`xd`)
    .addField("Helpers & Staff:", "<:Pixel:721279438406418503>", true)
    .addField("\u200b", "<:Rii:721279439056666635>", true)
    .addField("\u200b", "<:Ammy:721279438192377895>", true)
    .setColor(0xC76CF5);
    message.channel.send(embed);
    
}
}
