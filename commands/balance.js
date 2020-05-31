const db = require('quick.db');
const Discord = require("discord.js");

module.exports = {
  name: "balance",
  description: "Pinging the bot",
  execute(client, message) {

    db.add(`money_${message.author.id}`, 100)
    let money = db.fetch(`money_${message.author.id}`)
    
    if (money === null) money = 0;
      
      message.channel.send(`You have ${money}`);
    
}
}
