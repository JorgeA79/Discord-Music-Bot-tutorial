//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const Anime = require('anime-scrapper').Anime

module.exports = {
  name: "test",
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
   })
   })
}
}
