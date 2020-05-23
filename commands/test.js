//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");

module.exports = {
  name: "test",
  description: "Pinging the bot",
  execute(client, message) {

  message.channel.send("<:kawaii:713667075838705698>");
    
}
}
