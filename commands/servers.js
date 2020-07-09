module.exports = {
  name: "verify",
  description: "Pinging the bot",
  execute(client, message) {
    const embed = new Discord.MessageEmbed()
    .setDescription(`Im currently in ${client.guilds.cache.size} / 100 Servers for getting verified <a:kawaii:713667075838705698>`)
    .setColor(0xC76CF5);
  message.channel.send(embed);
    
}
}
