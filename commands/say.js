const Discord = require("discord.js");

module.exports = {
  name: "say",
  description: "Dance with someone owo",
  execute(client, message, args) 
   		message.channel.send(args);
  }
};
