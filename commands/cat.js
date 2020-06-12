//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const superagent = require("superagent")


module.exports = {
  name: "cat",
  description: "Pinging the bot",
  execute(client, message) {
   
   
   let {body} = superagent.get('http://aws.random.cat/meow')
    
    if(!{body}) return message.channel.send("I broke! Try again.")
    
    const embed = new Discord.MessageEmbed()
    .setDescription(`:cat: | Here is your image!`)
    .setColor(0xC76CF5)
    .setImage(body.file)
    .setFooter('Have a nice day!', process.env.BOT_AVATAR)
    message.channel.send(embed);
    
}
}
