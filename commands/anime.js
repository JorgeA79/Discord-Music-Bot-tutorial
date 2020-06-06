//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
onst { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ping",
  description: "Pinging the bot",
  execute(client, message) {

 if(!args.length) {
      return message.channel.send("Please Give Anime Name")
 }
 
 
let option = {
      url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
      method: `GET`,
      headers: {
        'Content-Type': "application/vnd.api+json",
        'Accept': "application/vnd.api+json"

      },
      json: true
    }
    
    
    message.channel.send("Fetching The Info").then(msg => {
      get(option).then(body => {
       try {
        let embed = new MessageEmbed()
        .setTitle(body.data[0].attributes.titles.en)
        .setColor("RED")
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("Ratings", body.data[0].attributes.averageRating)
        .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount)
        //.setImage(body.data[0].attributes.coverImage.large)
        //try it
        
        
        message.channel.send(embed)
        msg.delete();
        
       } catch (err) {
        msg.delete();
         return message.channel.send("Unable to find this anime");
       }     
      }  
      
      
      
    
}
}
