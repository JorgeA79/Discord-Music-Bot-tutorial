//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const fs = require("fs");

var contents = fs.readFileSync("./commands/agents/agents.json");
var jsonContent = JSON.parse(contents);


module.exports = {
  name: "valorant",
  description: "Pinging the bot",
  execute(client, message, args) {
    
  
    if(args[0]=="agent"){
    
    var agent = jsonContent.agents[0]; 
    if(!args[1]) return message.reply("Please specify one of the agents \n -Viper\n -Omen\n -Reyna\n -Jett")
    if(args[1] == "viper") agent = jsonContent.agents[0]; 
    if(args[1] == "jett") agent = jsonContent.agents[1];
    if(args[1] == "omen") agent = jsonContent.agents[2];
    if(args[1] == "reyna") agent = jsonContent.agents[3]; 
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
      
    }else{
    return message.reply("Current Valorant modules \n -Agent")
    }  
}
}
