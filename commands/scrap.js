//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const Anime = require('anime-scraper').Anime

module.exports = {
  name: "scrap",
  description: "Pinging the bot",
  execute(client, message, args) {
const cmd = args.join(" ").split(' | ');
   
   if(!cmd[0]){
   return message.channel.send("Please give animme name");
   }
   if(!cmd[1]){
   return message.channel.send("Please give animme episode number");
   } 
   Anime.fromName(cmd[0]).then(function (anime){
   anime.episodes[cmd[1]-1].fetch().then(function(episode){
   console.log(episode)
    let embed = new Discord.MessageEmbed()
    .setTitle(`SCRAP - ${cmd}`)
    .setColor(0xC76CF5)
    .addField(episode.videoLinks[0].name, `[LINK 1](${episode.videoLinks[0].URL})`, true)
    .addField(episode.videoLinks[1].name, `[LINK 2](${episode.videoLinks[1].URL})`, true)
    .addField(episode.videoLinks[2].name, `[LINK 3](${episode.videoLinks[2].URL})`, true)
    .addField(episode.videoLinks[3].name, `[LINK 4](${episode.videoLinks[3].URL})`, true)
    .addField(episode.videoLinks[4].name, `[LINK 5](${episode.videoLinks[4].URL})`, true)
    .addField(episode.videoLinks[5].name, `[LINK 6](${episode.videoLinks[5].URL})`, true);
     
     message.channel.send(embed)
   })
   })
}
}
