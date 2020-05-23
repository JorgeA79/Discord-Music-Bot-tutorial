//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");
const Discord = require("discord.js");
			
module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
      return queue.textChannel.send("Music Queue is Ended Now 😌").catch(console.error)
    }
    
    try {
      var stream = await ytdlDiscord(song.url, {
        highWaterMark: 1 << 25,
      });
      
    } catch (error) {
      if(queue) {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
      
      if(error.message.includes === "copyright") {
        return message.channel.send("THIS VIDEO CONTAINS COPYRIGHT CONTENT")
      } else {
        console.error(error)
      }
    }
    
    const dispatcher = queue.connection
    .play(stream, {type: "opus"}).on("finish", () => {
      if(queue.loop) {
        let lastsong = queue.songs.shift()
        queue.songs.push(lastsong)
        module.exports.play(queue.songs[0], message)
      } else {
        queue.songs.shift()
        module.exports.play(queue.songs[0], message)
      }
    }).on("error", console.error)
    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
    
    
             const embed = new Discord.MessageEmbed()
	            .setTitle(song.title)
  	          .setAuthor("PixelEdits","https://cdn.discordapp.com/avatars/710373309279109129/3bccbda5edd8e7228a8ba9166385f349.png?size=256")
  	          .setColor(0x7AFFA8)
  	          .setDescription(`🔵▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 0s / XDs`)
	      .addField(`STARTED PLAYING **${song.title} **`)
  	          .setThumbnail("")
	             .setURL(song.url)
     	queue.textChannel.send(embed);
    
    
  }
}
