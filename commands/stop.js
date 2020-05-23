const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stop the music",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      return message.channel.send("You need to be in a voice channel <a:x_:713677703756251147>");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("There is nothing playing that i could stop");
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
    const embed = new Discord.MessageEmbed()
    .setDescription("**Stoped the song form playing music** <a:x_:713677703756251147>")
    .setColor(0xC76CF5);
    serverQueue.textChannel.send(embed);
  }
};
