const Discord = require("discord.js");

module.exports = {
  name: "say",
  description: "Say something owo",
  execute(client, message, args) {
    const args = message.content.slice(prefix.length).split(` `);
		message.delete(1000);
		if (!args.length) {
		return message.channel.send(`You didn't say anything, ${message.author}!`);
	  }
		
	const embed = new Discord.MessageEmbed()
   .setColor(0xC76CF5)
  .setDescription(args.splice(1).join(" "))
  message.channel.send(embed);
  }
};
