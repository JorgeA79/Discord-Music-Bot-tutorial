//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const fs = require("fs");

var contents = fs.readFileSync("./commands/agents/agents.json");
var jsonContent = JSON.parse(contents);


module.exports = {
  name: "valorant",
  description: "Pinging the bot",
  execute(client, message, args) {
    
for (var i=0; i<jsonContent.agents.length; i++) {

  
    var agent = jsonContent.agents[i]; 
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
      
    }    
}
}
