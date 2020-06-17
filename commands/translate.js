const Discord = require("discord.js");
const translate = require('translate');



module.exports = {
  name: "translate",
  description: "Pinging the bot",
  execute(client, message) {
  
  if(!args[0]) return message.channel.send('You need to specify a language');
  if(!args[1]) return message.channel.send('You need to specify a word');
  
    const texttot = args.splice(1).join(" '");
    const language = args[0].toLowerCase();
    
    try{
    const text = await translate(texttot, language);  
    const embed = new Discord.MessageEmbed()
    .setDescription(`${text}`)
    .setColor(0xC76CF5);
    message.channel.send(embed);
    }
    catch(e){
    
    console.log(e);
    
    }
}
}