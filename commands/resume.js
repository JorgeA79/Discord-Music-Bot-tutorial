const Discord = require("discord.js");

module.exports = {
  name: "resume", 
  description: "Resume the paused Song",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
     const embed = new Discord.MessageEmbed()
          .setDescription("**You need to be in a voice channel** <a:x_:713677703756251147>")
          .setColor(0xC76CF5);
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);
    if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume()
      const embed = new Discord.MessageEmbed()
          .setDescription("✅ | Resumed the Paused Song")
          .setColor(0xC76CF5);
        return message.channel.send(embed);
 }
      const embed = new Discord.MessageEmbed()
          .setDescription("**There is nothing paused that i can resume** <a:x_:713677703756251147>")
          .setColor(0xC76CF5);
           message.channel.send(embed);

    
  }
}
