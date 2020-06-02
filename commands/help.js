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

  .addField(":shield: Main Commands",
    "\`help\` \`ping\` \`server\` \`balance\` \`daily\` \`profile\`", true)

  .addField(":8ball: Fun Commands", "\`8ball\` \`flip\` \`head\` or \`tail\` \`say\` \`ship\` \`slots\`", true)
.addField("<:kannaheart:712714267056537641> Roleplay Commands", "\`hug\` \`slap\` \`kiss\` \`shoot\`,\`protect\` \`wave\` \`date\` \`dance\` \`pat\`", true)
.addField(":musical_note: Music Commands", "\`play\` \`stop\` \`np\` \`queue\` \`pause\` \`resume\` \`lyrics\` \`skip\` \`clear\`", true)
.addField("<:pokeb:716936621265518613> Anime Commands", "\`pokedex\`",true)
.addField(":video_game: Game Commands", "\`osu\`",true)      
  message.channel.send(embed);
  
  }
};
