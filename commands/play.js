const { Util } = require("discord.js");
const { YOUTUBE_API_KEY } = require("../config.json");
const ytdl = require("ytdl-core");
const yts = require( 'yt-search' );
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const { play } = require("../system/music.js") 
module.exports = {
  name: "play",
  description: "PLAY THE SOFTNESS OF THE SOUND",
  async execute(client, message, args) {
    //FIRST OF ALL WE WILL ADD ERROR MESSAGE AND PERMISSION MESSSAGE
    if (!args.length) {
      //IF AUTHOR DIDENT GIVE URL OR NAME
      return message.channel.send("WRONG SYNTAX : Type `play <URL> or text`");
    }

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      const embed = new Util.MessageEmbed()
    .setDescription("You need to be in a voice channel <a:x_:713677703756251147>")
    .setColor(0xC76CF5);
      //IF AUTHOR IS NOT IN VOICE CHANNEL
     return message.channel.send(embed);
    }

    //WE WILL ADD PERMS ERROR LATER :(
    const image = "";
    const targetsong = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const urlcheck = videoPattern.test(args[0]);

    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      return message.channel.send("PLAYLIST CANNOT BE PLAYED");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let songData = null;
    let song = null;

    if (urlcheck) {
      try {
       
        songData = await ytdl.getInfo(args[0]);
        const image = "https://img.youtube.com/vi/" + songData.video_id +"/default.jpg";
        song = {
          title: songData.title,
          url: songData.video_url,
          duration: songData.length_seconds,
          image: image
        };
      } catch (error) {
        if (message.include === "copyright") {
          return message
            .reply("THERE IS COPYRIGHT CONTENT IN VIDEO -_-")
            .catch(console.error);
        } else {
          console.error(error);
        }
      }
    } else {
      try {
        
        const result = await youtube.searchVideos(targetsong, 1)
        songData = await ytdl.getInfo(result[0].url)
         const image = "https://img.youtube.com/vi/" + songData.video_id +"/default.jpg";
         song = {
          title: songData.title,
          url: songData.video_url,
          duration: songData.length_seconds,
          image: image
        };
      } catch (error) {
        console.error(error)
      }
    }
    
    if(serverQueue) {
      serverQueue.songs.push(song);
      return message.channel.send("\`${song.title}\`, Song Added to queue <a:kawaii:713667075838705698>"));
      .catch(console.error)
    } else {
      queueConstruct.songs.push(song);
    }
    
    if(!serverQueue) message.client.queue.set(message.guild.id, queueConstruct)
    
     if (!serverQueue) {
      try {
        queueConstruct.connection = await channel.join();
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(`Could not join voice channel: ${error}`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send({embed: {"description": `😭 | Could not join the channel: ${error}`, "color": "#ff2050"}}).catch(console.error);
      }
    }
    
    
  }
};
