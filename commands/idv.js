const Discord = require("discord.js");
const fs = require("fs");

var contents = fs.readFileSync("./commands/agents/idv.json");
var jsonContent = JSON.parse(contents);


module.exports = {
  name: "idv",
  description: "Pinging the bot",
  execute(client, message, args) {

  if(args[0] == "survivors"){
  if(!args[1]){
  return message.reply("no lul");
  }else{
  
  const argsowo = args.splice(1).join(" ");  
    
  const idv = {
  "EMMA WOODS": jsonContent.survivors[0]
  }
  const embed = new Discord.MessageEmbed()
    .setTitle("Identity V Survivors")
    .setDescription(`Here's **${idv[argsowo.toUpperCase()].name}** Background Story and abilities!`)
    .addField("Name:", `${idv[argsowo.toUpperCase()].name}`, true)
    .addField("Background Story:", `${idv[argsowo.toUpperCase()].bg}`, false)
    .addField("Abilities:", `**${idv[argsowo.toUpperCase()].abilities[0].name}:**\n${idv[argsowo.toUpperCase()].abilities[0].description}`, false)
    .addField("\u200b", `**${idv[argsowo.toUpperCase()].abilities[1].name}:**\n${idv[argsowo.toUpperCase()].abilities[1].description}`, false)
    .addField("\u200b", `**${idv[argsowo.toUpperCase()].abilities[2].name}:**\n${idv[argsowo.toUpperCase()].abilities[2].description}`, false)
    .addField("\u200b", `**${idv[argsowo.toUpperCase()].abilities[3].name}:**\n${idv[argsowo.toUpperCase()].abilities[3].description}`, false)
    .setThumbnail(idv[argsowo.toUpperCase()].image)
    .setImage("https://cdn.discordapp.com/attachments/396942894487044099/727026641230102589/unknown.png")
    .setColor(0xC76CF5);
    
    message.channel.send(embed);
  }
  }else if(args[0]=="hunters"){
   
    if(!args[1]){
  return message.reply("no lul");
  }else{
  
  const argsowo = args.splice(1).join(" ");  
    
  const idv = {
  "LEO BLACK": jsonContent.hunters[0]
  }
  const embed = new Discord.MessageEmbed()
    .setTitle("Identity V Hunters")
    .setDescription(`Here's **${idv[argsowo.toUpperCase()].name}** Background Story and abilities!`)
    .addField("Name:", `${idv[argsowo.toUpperCase()].name}`, true)
    .addField("Background Story:", `${idv[argsowo.toUpperCase()].bg}`, false)
    .addField("Abilities:", `**${idv[argsowo.toUpperCase()].abilities[0].name}:**\n${idv[argsowo.toUpperCase()].abilities[0].description}`, false)
    .addField("\u200b", `**${idv[argsowo.toUpperCase()].abilities[1].name}:**\n${idv[argsowo.toUpperCase()].abilities[1].description}`, false)
    .addField("\u200b", `**${idv[argsowo.toUpperCase()].abilities[2].name}:**\n${idv[argsowo.toUpperCase()].abilities[2].description}`, false)
    .addField("\u200b", `**${idv[argsowo.toUpperCase()].abilities[3].name}:**\n${idv[argsowo.toUpperCase()].abilities[3].description}`, false)
    .setThumbnail(idv[argsowo.toUpperCase()].image)
    .setImage("https://cdn.discordapp.com/attachments/396942894487044099/727026641230102589/unknown.png")
    .setColor(0xC76CF5);
    
    message.channel.send(embed);
  }
    
  }else{
  return message.reply("no xd");
  }




    
}
}
