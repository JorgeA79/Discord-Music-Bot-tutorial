//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const fs = require("fs");

var contents = fs.readFileSync("./commands/agents/agents.json");
var jsonContent = JSON.parse(contents);


module.exports = {
  name: "valorant",
  description: "Pinging the bot",
  execute(client, message, args) {
    
    if(!args[0]){
     const embed = new Discord.MessageEmbed()
     .setTitle("Valorant Commands")
    .setDescription(`This are all the commmands related to valorant game!, ${message.author}\n\u200b`)
    .addField("p!valorant agent/p!valorant agent [agent-name]:", `<:valorant:718659131917074504> Get all the agents in game/ or the info about one in specific`, false)
     .setImage('https://cdn.discordapp.com/attachments/396942894487044099/718659478500671568/unknown.png')
    .setColor(0xC76CF5);
    return message.channel.send(embed);
    } 
    
    
    
    if(args[0].toLowerCase() =="agent"){
    
    var agent = jsonContent.agents[0]; 
    if(!args[1]){ 
      
      const embed = new Discord.MessageEmbed()
     .setTitle("Valorant Agents")
     .setDescription(`This are all the available agents in Valorant:\n\u200b`)
     .addField(`${jsonContent.agents[0].emote} **${jsonContent.agents[0].name}**`,`${jsonContent.agents[0].type}`, true)
     .addField(`${jsonContent.agents[1].emote} **${jsonContent.agents[1].name}**`,`${jsonContent.agents[1].type}`, true)
     .addField(`${jsonContent.agents[2].emote} **${jsonContent.agents[2].name}**`,`${jsonContent.agents[2].type}\n\u200b`, true)
     .addField(`${jsonContent.agents[3].emote} **${jsonContent.agents[3].name}**`,`${jsonContent.agents[3].type}`, true)
     .addField(`${jsonContent.agents[4].emote} **${jsonContent.agents[4].name}**`,`${jsonContent.agents[4].type}`, true)
     .addField(`${jsonContent.agents[5].emote} **${jsonContent.agents[5].name}**`,`${jsonContent.agents[5].type}\n\u200b`, true)
     .addField(`${jsonContent.agents[6].emote} **${jsonContent.agents[6].name}**`,`${jsonContent.agents[6].type}`, true)
     .addField(`${jsonContent.agents[7].emote} **${jsonContent.agents[7].name}**`,`${jsonContent.agents[7].type}`, true)
     .addField(`${jsonContent.agents[8].emote} **${jsonContent.agents[8].name}**`,`${jsonContent.agents[8].type}\n\u200b`, true)
     .addField(`${jsonContent.agents[9].emote} **${jsonContent.agents[9].name}**`,`${jsonContent.agents[9].type}`, true)
     .addField(`${jsonContent.agents[10].emote} **${jsonContent.agents[10].name}**`,`${jsonContent.agents[10].type}`, true)
     .addField("\u200b", "\u200b",true)     
     .setThumbnail('https://preview.redd.it/pq2si1uks8t41.png?width=512&format=png&auto=webp&s=a86b0d7a2620b6f0d404e191d37d75f895996c23')
     .setColor(0xC76CF5);
     return message.channel.send(embed);
      
      
      return message.reply("Please specify one of the agents \n -Viper\n -Omen\n -Reyna\n -Jett\n -Sova\n -Phoenix")}
    if(args[1].toLowerCase() == "viper") agent = jsonContent.agents[0]; 
    if(args[1].toLowerCase() == "jett") agent = jsonContent.agents[1];
    if(args[1].toLowerCase() == "omen") agent = jsonContent.agents[2];
    if(args[1].toLowerCase() == "reyna") agent = jsonContent.agents[3]; 
    if(args[1].toLowerCase() == "sova") agent = jsonContent.agents[4]; 
    if(args[1].toLowerCase() == "phoenix") agent = jsonContent.agents[5]; 
    if(args[1].toLowerCase() == "raze") agent = jsonContent.agents[6];
    if(args[1].toLowerCase() == "cypher") agent = jsonContent.agents[7]; 
    if(args[1].toLowerCase() == "sage") agent = jsonContent.agents[8];
    if(args[1].toLowerCase() == "breach") agent = jsonContent.agents[9]; 
    if(args[1].toLowerCase() == "brimstone") agent = jsonContent.agents[10];   
      
    const embed = new Discord.MessageEmbed()
    .setTitle("Valorant Agents")
    .setDescription(`${agent.emote} - **${agent.name}'s** agent info`)
    .addField("Name:", `${agent.name}`, true)
    .addField("Type:", `${agent.type}`, true)
    .addField("Description:", `${agent.description}`, false)
     .addField("Abilities:", `**[C]** ${agent.abilities[0]} \n **[Q]** ${agent.abilities[1] } \n **[E]** ${agent.abilities[2]}\n **[X]** ${agent.abilities[3]}`, false)
    .setThumbnail(agent.thumbnail)
    .setImage(agent.image)
    .setColor(0xC76CF5);
    message.channel.send(embed);
      
    }else if(args[0].toLowerCase() =="map"){
     if(!args[1]){ 
      
     }
        const embed = new Discord.MessageEmbed()
     .setTitle("Valorant Maps")
     .setDescription(`This are all the available maps in Valorant:\n\u200b`)
     .addField(`**Maps:**`,`${jsonContent.maps[0].emote} ${jsonContent.maps[0].name}`, true)
     .addField("\u200b", `${jsonContent.maps[1].emote} ${jsonContent.maps[1].name}`,true) 
     .addField("\u200b", `${jsonContent.maps[2].emote} ${jsonContent.maps[2].name}`,true)    
     .addField("\u200b", `${jsonContent.maps[3].emote} ${jsonContent.maps[3].name}`,true)   
     .addField("\u200b", "\u200b",true)     
     .addField("\u200b", "\u200b",true)        
     .setThumbnail('https://preview.redd.it/pq2si1uks8t41.png?width=512&format=png&auto=webp&s=a86b0d7a2620b6f0d404e191d37d75f895996c23')
     .setImage("https://cdn.discordapp.com/attachments/396942894487044099/720423754550738944/unknown.png")
     .setFooter('Chack map plan with p!valorant map <map-name>')
     .setColor(0xC76CF5);
     return message.channel.send(embed);
    
    
    
    }else{
     const embed = new Discord.MessageEmbed()
     .setTitle("Valorant Commands")
    .setDescription(`This are all the commmands related to valorant game!, ${message.author}\n\u200b`)
    .addField("p!valorant agent/p!valorant agent [agent-name]:", `<:valorant:718659131917074504> Get all the agents in game/ or the info about one in specific`, false)
     .setImage('https://cdn.discordapp.com/attachments/396942894487044099/718659478500671568/unknown.png')
    .setColor(0xC76CF5);
    return message.channel.send(embed);
    }  
}
}
