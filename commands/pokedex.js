const Discord = require("discord.js");
    var Pokedex = require('pokedex'),
    pokedex = new Pokedex();
    
    
module.exports = {
  name: "pokedex",
  description: "get list of added songs",
  execute: (client, message, args) => {
    const { channel } = message.member.voice;
    if (!args) {
          const embed = new Discord.MessageEmbed()
          .setDescription("**You didn't write any Pokemon** <a:x_:713677703756251147>")
          .setColor(0xC76CF5);
          return message.channel.send(embed);
    }

    var pokemon = pokedex.pokemon(args); 
    var name = pokemon.name;
    var id = pokemon.id;
    var height = pokemon.height;
    var weight = pokemon.weight;
    var sprite = pokemon.sprites.animated;
    var exp = pokemon.base_experience;

          const embed = new Discord.MessageEmbed()
          .setDescription(sprite)
          .setColor(0xC76CF5);
           message.channel.send(embed);


  }
};
