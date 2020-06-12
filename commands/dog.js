//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const superagent = require("superagent")
const fetch = require('node-fetch');

module.exports = {
  name: "dog",
  description: "Pinging the bot",
  execute(client, message) {
   
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json()).then(body => {
            if(!body) return message.reply(" whoops. I broke, try again!")

              const embed = new Discord.MessageEmbed()
              .setDescription(`:dog: | Here is your image!`)
              .setColor(0xC76CF5)
              .setImage(body.message)
              .setFooter('Have a nice day!', process.env.BOT_AVATAR)
              message.channel.send(embed);
        })  
    
}
}
