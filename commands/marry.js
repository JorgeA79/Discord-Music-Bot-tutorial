const Discord = require("discord.js");

module.exports = {
  name: "marry",
  description: "Pinging the bot",
  execute(client, message) {
 
	  
 message.channel.send(`Do you want to marry with ${message.author.username}`)
	  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
          console.log(collector)
          collector.on('collect', message => {
          if (message.content == "See") {
                message.channel.send("You Want To See Someones Spec OK!");
          } else if (message.content == "Change") {
                message.channel.send("You Want To Change Your Spec OK!");
          }
    
    
}
}
