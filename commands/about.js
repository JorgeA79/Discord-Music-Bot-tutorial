const Discord = require("discord.js");

module.exports = {
  name: "about",
  description: "Pinging the bot",
  execute(client, message) {
  
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`Pixel Bot`)
    .setDescription(`xd`)
    .addField("\u200b", "<:Pixel:721279438406418503> PixelEdits", true)
    .addField("Helpers & Staff:", "<:Rii:721279439056666635> RiiDaPeanut", true)
    .addField("\u200b", "<:Ammy:721279438192377895> AmmyZeru", true)
    .setColor(0xC76CF5);
    message.channel.send(embed);
    
}
}
