const Discord = require("discord.js");

module.exports = {
  name: "about",
  description: "Pinging the bot",
  execute(client, message) {
  
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`Pixel Bot`)
    .setDescription(`PixelBot is a bot with several functions and games for having some fun and spending time on discord, we hope you to like our bot!`)
    .addField("Functions:", "<:discord_bot_dev:719520819771998289> Core", true)
    .addField("\u200b", ":gem: Social", true)
    .addField("\u200b", ":credit_card:  Economy", true)
    .addField("\u200b", ":8ball: Fun & Games", true)
    .addField("\u200b", "<:kannaheart:712714267056537641> Roleplay", true)
    .addField("\u200b", ":musical_note: Music", true)
    .addField("\u200b", "<:pokeb:716936621265518613> Anime", true)
    .addField("\u200b", ":video_game: Gaming", true)
    .addField("\u200b", "⚙️ Utility", true)
    .addField("\u200b", "\u200b", true)
    .addField("Main Coder", "<:FinalWords:721283729989042284> 𝒥𝑜𝓇𝑔𝓎\n\u200b", true)
    .addField("\u200b", "\u200b", true)
    .addField("\u200b", "<:Pixel:721279438406418503> PixelEdits\u200b\u200b", true)
    .addField("Helpers & Staff:", "<:Rii:721279439056666635> RiiDaPeanut\u200b\u200b", true)
    .addField("\u200b", "<:Ammy:721279438192377895> AmmyZeru\u200b\u200b", true)
    .setColor(0xC76CF5);
    message.channel.send(embed);
    
}
}
