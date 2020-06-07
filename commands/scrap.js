//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const Anime = require('anime-scraper').Anime

module.exports = {
  name: "scrap",
  description: "Pinging the bot",
  execute(client, message, args) {
const cmd = args.join(" ").split(' | ');
   
   if(!cmd[0]){
     	    
	    const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** please specify an anime name!`+"\n`p!scrap <anime-name> | <epsiode>`")
	    .setColor(0xC76CF5)
	    return message.channel.send(embed);   
	   
   
   }
   if(!cmd[1]){
	   
    	    const embed = new Discord.MessageEmbed()
            .setDescription(`**${message.author.username}** please specify an episode!`+"\n`p!scrap <anime-name> | <epsiode>`")
	    .setColor(0xC76CF5)
	    return message.channel.send(embed);   
	   
   } 
   try {  
   Anime.fromName(cmd[0]).then(function (anime){
   anime.episodes[cmd[1]-1].fetch().then(function(episode){
   console.log(episode)
      var pokemonL = cmd[0].charAt(0).toUpperCase();
			var pokemonM = cmd[0].slice(1); 
			var pokemonX = pokemonL + pokemonM;
    
	console.log(episode.videoLinks.length); 
	   
    if(episode.videoLinks.length = 1){
    let embed = new Discord.MessageEmbed()
    .setTitle(`${pokemonX}, Episode ${cmd[1]}`)
    .setColor(0xC76CF5)
    .addField(episode.videoLinks[0].name, `[LINK 1](${episode.videoLinks[0].url})`, true);    
    message.channel.send(embed)  
	    
    }else if(episode.videoLinks.length = 2){        
    let embed = new Discord.MessageEmbed()
    .setTitle(`${pokemonX}, Episode ${cmd[1]}`)
    .setColor(0xC76CF5)
    .addField(episode.videoLinks[0].name, `[LINK 1](${episode.videoLinks[0].url})`, true)
    .addField(episode.videoLinks[1].name, `[LINK 2](https:${episode.videoLinks[1].url})`, true);
    message.channel.send(embed)
    }else if(episode.videoLinks.length = 3){        
    let embed = new Discord.MessageEmbed()
    .setTitle(`${pokemonX}, Episode ${cmd[1]}`)
    .setColor(0xC76CF5)
    .addField(episode.videoLinks[0].name, `[LINK 1](${episode.videoLinks[0].url})`, true)
    .addField(episode.videoLinks[1].name, `[LINK 2](https:${episode.videoLinks[1].url})`, true)
    .addField(episode.videoLinks[2].name, `[LINK 3](${episode.videoLinks[2].url})`, true) ;   
    message.channel.send(embed)
    }else if(episode.videoLinks.length = 4){        
    let embed = new Discord.MessageEmbed()
    .setTitle(`${pokemonX}, Episode ${cmd[1]}`)
    .setColor(0xC76CF5)
    .addField(episode.videoLinks[0].name, `[LINK 1](${episode.videoLinks[0].url})`, true)
    .addField(episode.videoLinks[1].name, `[LINK 2](https:${episode.videoLinks[1].url})`, true)
    .addField(episode.videoLinks[2].name, `[LINK 3](${episode.videoLinks[2].url})`, true)  
    .addField(episode.videoLinks[3].name, `[LINK 4](${episode.videoLinks[3].url})`, true); 	    
    message.channel.send(embed)
    }else if(episode.videoLinks.length = 5){        
    let embed = new Discord.MessageEmbed()
    .setTitle(`${pokemonX}, Episode ${cmd[1]}`)
    .setColor(0xC76CF5)
    .addField(episode.videoLinks[0].name, `[LINK 1](${episode.videoLinks[0].url})`, true)
    .addField(episode.videoLinks[1].name, `[LINK 2](https:${episode.videoLinks[1].url})`, true)
    .addField(episode.videoLinks[2].name, `[LINK 3](${episode.videoLinks[2].url})`, true)
    .addField(episode.videoLinks[3].name, `[LINK 4](${episode.videoLinks[3].url})`, true)
    .addField(episode.videoLinks[4].name, `[LINK 5](${episode.videoLinks[4].url})`, true);     
    message.channel.send(embed)
    }else if(episode.videoLinks.length = 6){        
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
    }
     
     
   })
   })
    }
    catch(err){	   
     const embed = new Discord.MessageEmbed()
      .setDescription("We could not find that anime <a:x_:713677703756251147>")
      .setColor(0xC76CF5);
      return message.channel.send(embed);
    }   
}
}
