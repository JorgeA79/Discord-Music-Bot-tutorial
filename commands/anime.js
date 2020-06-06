//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
var request = require('request');

module.exports = {
  name: "anime",
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
    
    request(option, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let embed = new MessageEmbed()
        .setTitle(body.data[0].attributes.titles.en)
        .setColor("RED")
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("Ratings", body.data[0].attributes.averageRating)
        .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount)
        .setImage(body.data[0].attributes.coverImage.large)      
        
        message.channel.send(embed)
      console.log(body); // Print the google web page.
    }else{
    return message.channel.send("Unable to find this anime");
    }
    });

      
      
      
    
}
}
