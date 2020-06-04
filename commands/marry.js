 const Discord = require("discord.js");

module.exports = {
  name: "marry",
  description: "Pinging the bot",
  execute(client, message) {
 
	   let member = message.mentions.members.first();
	   if(!member) return message.reply("Try mentioning the person");
	   if(member.user.id == message.author.id) return message.reply("You cannot marry with yourself");
	  
 	  message.channel.send(`${member.user}, Do you want to marry with message.author`)
	  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === member.user.id, { time: 10000 });
          console.log(collector)
          collector.on('collect', m => {
          if (m.content == "yes") {
	
                m.channel.send("Accepted");
	  
          } else if (m.content == "no") {
	
                m.channel.send("Denied");
          }
    
	  })
}
}
