const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ratewaifu",
  description: "Stop the music",
  execute(client, message, args) {
	var percentage = Math.floor(Math.random() * 10) + 1; 
	 
   if(!args.length) {
      const embed = new Discord.MessageEmbed()
      .setDescription("Please type the name of the waifu after the command <a:x_:713677703756251147>")
      .setColor(0xC76CF5);
      return message.channel.send(embed);
 }
 
  let embed = new MessageEmbed()
        .setColor(0xC76CF5)
        .setDescription(`I'd give ${args.join(" ")} a ${percentage}/10 <a:x_:713677703756251147>`);    
        message.channel.send(embed)
	

	
  }
};
