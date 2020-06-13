//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const superagent = require("superagent")
const fetch = require('node-fetch');

module.exports = {
  name: "fox",
  description: "Pinging the bot",
  execute(client, message) {
   
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops. I broke, try again!")

              const embed = new Discord.MessageEmbed()
              .setDescription(`🦊 | Here is your image!`)
              .setColor(0xC76CF5)
              .setImage(body.image)
              .setFooter('Have a nice day!', process.env.BOT_AVATAR)
              message.channel.send(embed);
        })  
    
}
}
