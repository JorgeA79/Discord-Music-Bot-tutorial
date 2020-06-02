//I WILL BE BACK AFTER 5 min
const ytdlDiscord = require("ytdl-core-discord");
const Discord = require("discord.js");
			
module.exports = {
  async play(song, message) {
    const queue = message.client.queue.get(message.guild.id);
    
    if(!song) {
      queue.channel.leave();
      message.client.queue.delete(message.guild.id)
      return queue.textChannel.send("Music Queue has Ended Now <a:sad:713691844076109866>").catch(console.error)
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
  	          .setAuthor("PixelEdits", process.env.BOT_AVATAR)
  	          .setColor(0xC76CF5)
  	          .setDescription(`🔵▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 0s / ${song.duration}s <a:kawaii:713667075838705698> `)
  	          .setThumbnail(song.image)
	          .setURL(song.url)
	     	.setTimestamp()
	  	.setFooter(`Enjoy your song!`);
     	queue.textChannel.send(embed);
    
    
  }
}
