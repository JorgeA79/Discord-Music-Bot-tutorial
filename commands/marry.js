 const Discord = require("discord.js");

module.exports = {
  name: "marry",
  description: "Pinging the bot",
  execute(client, message) {
 
	  
 message.channel.send(`Do you want to marry with ${message.author.username}`)
	  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === "528854186176282634", { time: 10000 });
          console.log(collector)
          collector.on('collect', m => {
          if (m.content == "See") {
	
                m.channel.send("You Want To See Someones Spec OK!");
	  
          } else if (m.content == "Change") {
	
                m.channel.send("You Want To Change Your Spec OK!");
          }
    
	  })
}
}