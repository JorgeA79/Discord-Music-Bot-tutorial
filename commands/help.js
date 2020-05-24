const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Help",
  execute(client, message, args) {
  
     	const embed = new Discord.MessageEmbed()
  .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
  .setDescription("Here you can find the main commands of the bot so you wont get confused <a:__:713677852289269761>")
.setThumbnail("https://cdn.discordapp.com/avatars/370483123848478721/2a073955469d1aefda2ce240ab5d2948.png?size=128")

  .addField("Main Commands",
    "\`help\`,\`ping\`,\`server\`")

  .addField("Fun Commands", "\`8ball\`, \`flip\` \`head\` or \`tail\`,\`say\`")
.addField("Roleplay Commands", "\`hug\`,\`slap\`,\`kiss\`,\`shoot\`,\`protect\`,\`wave\`,\`date\`,\`dance\`,\`pat\`")
	.addField("Music Commands", "\`play\`,\`stop\`,\`np\`,\`queue\`,\`pause\`,\`resume\`,\`lyrics\`,\`skip\`,\`clear\`")
  message.channel.send(embed);
  
  }
};
