const Discord = require("discord.js");

module.exports = {
  name: "flip",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  if(args[0] == "tails"){
  message.channel.send("yes");
    }else{
    message.channel.send("no");
    }
}
}
