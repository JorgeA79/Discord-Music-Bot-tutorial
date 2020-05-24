const Discord = require("discord.js");
module.exports = {
  name: "np",
  description: "send the name of on going song",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
       const embed = new Discord.MessageEmbed()
    .setDescription("You need to be in a voice channel <a:x_:713677703756251147>")
    .setColor(0xC76CF5);
      //IF AUTHOR IS NOT IN VOICE CHANNEL
     return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
     const embed = new Discord.MessageEmbed()
      .setDescription("Bot is not playing anything <a:x_:713677703756251147>")
      .setColor(0xC76CF5);
      return message.channel.send(embed);
    }
    
    
     const embed = new Discord.MessageEmbed()
	    .setTitle(serverQueue.songs[0].title)
  	  .setAuthor("PixelEdits","https://cdn.discordapp.com/avatars/710373309279109129/3bccbda5edd8e7228a8ba9166385f349.png?size=256")
  	  .setColor(0xC76CF5)
  	  .setDescription(`🔵▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 0s / ${serverQueue.songs[0].durations}s <a:kawaii:713667075838705698> `)
  	  .setThumbnail(serverQueue.songs[0].image)
	    .setURL(serverQueue.songs[0].url)
	    .setTimestamp()
	  	.setFooter(`Enjoy your song!`);
     	queue.textChannel.send(embed);
    
    
    message.channel.send(serverQueue.songs[0].title)

    
    
    
  }
}
