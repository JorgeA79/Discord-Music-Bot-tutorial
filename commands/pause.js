const Discord = require("discord.js");

module.exports = {
  name: "pause",
  description: "pause the song",
  execute (client, message, args) {
  const { channel } = message.member.voice;
    if (!channel) {
       const embed = new Discord.MessageEmbed()
          .setDescription("**You need to be in a voice channel** <a:x_:713677703756251147>")
          .setColor(0xC76CF5);
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
       const embed = new Discord.MessageEmbed()
          .setDescription("**There is nothing in the queue** <a:x_:713677703756251147>")
          .setColor(0xC76CF5);
        return message.channel.send(embed);
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
       const embed = new Discord.MessageEmbed()
          .setDescription("✅ | Paused The Current Playing Song")
          .setColor(0xC76CF5);
        return message.channel.send(embed);
  }  
  }
};
