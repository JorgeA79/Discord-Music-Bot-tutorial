const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Help",
  execute(client, message, args) {
  
     	const embed = new Discord.MessageEmbed()
  .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
  .setDescription("Here you can find the main commands of the bot so you wont get confused <a:__:713677852289269761>")
.setThumbnail(process.env.BOT_AVATAR)

  .addField("Main Commands",
    "\`help\` \`ping\` \`server\` \`balance\` \`daily\` \`profile\`")

  .addField("Fun Commands", "\`8ball\` \`flip\` \`head\` or \`tail\` \`say\` \`ship\` \`slots\`", true)
.addField("Roleplay Commands", "\`hug\` \`slap\` \`kiss\` \`shoot\`,\`protect\` \`wave\` \`date\` \`dance\` \`pat\`", true)
.addField("Music Commands", "\`play\` \`stop\` \`np\` \`queue\` \`pause\` \`resume\` \`lyrics\` \`skip\` \`clear\`", true)
.addField("Anime Commands", "\`pokedex\`")
.addField("Game Commands", "\`osu\`",true)      
  message.channel.send(embed);
  
  }
};
