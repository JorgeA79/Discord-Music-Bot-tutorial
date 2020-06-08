const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Help",
  execute(client, message, args) {
  
     	const embed = new Discord.MessageEmbed()
  .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
  .setDescription("Here you can find the main commands of the bot so you wont get confused <a:__:713677852289269761> \n\u200b")
.setThumbnail(process.env.BOT_AVATAR)

  .addField("<:discord_bot_dev:719520819771998289> Core", "\`help\` \`ping\` \`server\` \`invite\` \`support\` \`urban\` \`avatar\`\n\u200b", true)
  .addField(":gem: Social", "\`profile\` \`marry\` \`mymarry\` \`divorce\` \`level\`\n\u200b", true)
  .addField(":credit_card:  Economy", "\`balance\` \`daily\` \`slots\`\n\u200b", true)      
  .addField(":8ball: Fun & Games", "\`8ball\` \`flip\` \`head\` or \`tail\` \`say\` \`ship\` \`slots\` \`ratewaifu\`\n\u200b", true)   
  .addField("<:kannaheart:712714267056537641> Roleplay", "\`hug\` \`slap\` \`kiss\` \`shoot\` \`protect\` \`wave\` \`date\` \`dance\` \`pat\`\n\u200b", true)
  .addField(":musical_note: Music", "\`play\` \`stop\` \`np\` \`queue\` \`pause\` \`resume\` \`lyrics\` \`skip\` \`clear\`\n\u200b", true)
  .addField("<:pokeb:716936621265518613> Anime", "\`pokedex\` \`anime\` \`scrap\`\n\u200b",true)
  .addField(":video_game: Gaming", "\`osu\` \`valorant\`\n\u200b",true) 
  .addField("\u200b", "\u200b",true)     
    .setTimestamp()  
  	.setFooter('Have a nice day!', process.env.BOT_AVATAR);      
  message.channel.send(embed)
    .then(msg => { msg.react(':arrow_forward:')
                    msg.react('🇼')
                  msg.react(':arrow_backward:')
                 })

  }
};
