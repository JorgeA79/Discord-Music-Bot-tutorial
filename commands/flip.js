const Discord = require("discord.js");

module.exports = {
  name: "flip",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  if(args[0] == "tail"){
  message.channel.send("yes");
    }else if(args[0] == "head"){
    message.channel.send("puede ser");
    }else{
     message.channel.send("no");
    
    }
}
}
