const Discord = require("discord.js");
const fs = require("fs");

var contents = fs.readFileSync("./commands/agents/agents.json");
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
  "EMMA WOODS":jsonContent. survivors[0]
  }
  const embed = new Discord.MessageEmbed()
    .setTitle("Identity V Survivors")
    .setDescription(`Here's **idv[argsowo.toUpperCase()].name** Background Story and abilities!`)
    .addField("Name:", `idv[argsowo.toUpperCase()].name`, true)
    .setImage(idv[argsowo.toUpperCase()].image)
    .setColor(0xC76CF5);
  }
  }else{
  return message.reply("no xd");
  }




    
}
}
