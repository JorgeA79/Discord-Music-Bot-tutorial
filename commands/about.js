const Discord = require("discord.js");

module.exports = {
  name: "about",
  description: "Pinging the bot",
  execute(client, message) {
  
  
    const embed = new Discord.MessageEmbed()
    .setTitle(`Pixel Bot`)
    .setThumbnail(process.env.BOT_AVATAR)
    .setImage("https://media.discordapp.net/attachments/396942894487044099/719703607963942994/unknown.png")
    .setDescription(`PixelBot is a bot with several functions and games for having some fun and spending time on discord, we hope you to like our bot!`)
    .addField("Guilds:", `Im in :${client.guilds.cache.size} servers!`, false)
    .addField("Functions:", "<:discord_bot_dev:719520819771998289> Core\n:gem: Social\n:credit_card:  Economy\n", true)
    .addField("\u200b", ":8ball: Fun & Games\n<:kannaheart:712714267056537641> Roleplay\n:musical_note: Music", true)
    .addField("\u200b", "<:pokeb:716936621265518613> Anime\n:video_game: Gaming\n⚙️ Utility\n\u200b", true)
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
