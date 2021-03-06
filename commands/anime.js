//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")
var request = require('request');

module.exports = {
  name: "anime",
  description: "Pinging the bot",
  execute(client, message, args) {

 if(!args.length) {
      const embed = new Discord.MessageEmbed()
      .setDescription("Please specify an anime name <a:x_:713677703756251147>")
      .setColor(0xC76CF5);
      return message.channel.send(embed);
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
      try {   
      let embed = new MessageEmbed()
        .setTitle(body.data[0].attributes.titles.en + " <a:kawaii:713667075838705698>")
        .setColor(0xC76CF5)
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("Ratings", body.data[0].attributes.averageRating)
        .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount)
        .setImage(body.data[0].attributes.coverImage.large)      
        
        message.channel.send(embed)

    }
    catch(error){
       const embed = new Discord.MessageEmbed()
      .setDescription("That's not a valid anime <a:x_:713677703756251147>")
      .setColor(0xC76CF5);
      return message.channel.send(embed);
    } 
    });

      
      
      
    
}
}
