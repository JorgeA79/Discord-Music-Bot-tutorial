const Discord = require("discord.js");

module.exports = {
  name: "user",
  description: "Pinging the bot",
  execute(client, message, args) {
 
    let target = message.mentions.users.first() || message.author;
 
    let uEmbed = new Discord.MessageEmbed()
        .setColor(0xC76CF5)
        .setTitle("User Info")
        .setThumbnail(message.guild.iconURL({ format: 'jpg' }))
        .setAuthor(`${target.username} Info`, target.displayAvatarURL({ format: 'jpg' }))
        .addField("**Username:**", `${target.username}`, true)
        .addField("**Discriminator:**", `${target.discriminator}`, true)
        .addField("**ID:**", `${target.id}`, true)
        .addField("**Status:**", `${target.presence.status}`, true)
        .addField("**Created At:**", `${target.createdAt}`, true)
        .setFooter(`PixelBot | Have a nice day!`, process.env.BOT_AVATAR);

    message.channel.send(uEmbed);
    
}
}

