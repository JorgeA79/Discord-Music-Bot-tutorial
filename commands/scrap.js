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
      var pokemonL = cmd[0].charAt(0).toUpperCase();
			var pokemonM = cmd[0].slice(1); 
			var pokemonX = pokemonL + pokemonM;
     
    let embed = new Discord.MessageEmbed()
    .setTitle(`${pokemonX}, Episode ${cmd[1]}`)
    .setColor(0xC76CF5)
    .addField(episode.videoLinks[0].name, `[LINK 1](${episode.videoLinks[0].url})`, true)
    .addField(episode.videoLinks[1].name, `[LINK 2](https:${episode.videoLinks[1].url})`, true)
    .addField(episode.videoLinks[2].name, `[LINK 3](${episode.videoLinks[2].url})`, true)
    .addField(episode.videoLinks[3].name, `[LINK 4](${episode.videoLinks[3].url})`, true)
    .addField(episode.videoLinks[4].name, `[LINK 5](${episode.videoLinks[4].url})`, true)
    .addField(episode.videoLinks[5].name, `[LINK 6](${episode.videoLinks[5].url})`, true);
     
     message.channel.send(embed)
   })
   })
}
}
