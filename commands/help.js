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
  .addField("1️⃣ - <:discord_bot_dev:719520819771998289> Core", "\`help\` \`ping\` \`server\` \`invite\` \`support\` \`serverinfo\`\n\u200b", true)
  .addField("2️⃣ - :gem: Social", "\`profile\` \`marry\` \`mymarry\` \`divorce\` \`level\`\n\u200b", true)
  .addField("3️⃣ - :credit_card:  Economy", "\`balance\` \`daily\` \`slots\` \`catch sell\` \`mine sell\`\n\u200b", true)      
  .addField("4️⃣ - :8ball: Fun & Games", "\`8ball\` \`flip\` \`head\` or \`tail\` \`ship\` \`slots\` \`ratewaifu\` \`catch\` \`mine\`\n\u200b", true)   
  .addField("5️⃣ - <:kannaheart:712714267056537641> Roleplay", "\`hug\` \`slap\` \`kiss\` \`shoot\` \`protect\` \`wave\` \`date\` \`dance\` \`pat\`\n\u200b", true)
  .addField("6️⃣ - :musical_note: Music", "\`play\` \`stop\` \`np\` \`queue\` \`pause\` \`resume\` \`lyrics\` \`skip\` \`clear\`\n\u200b", true)
  .addField("7️⃣ - <:pokeb:716936621265518613> Anime", "\`pokedex\` \`anime\` \`scrap\`\n\u200b",true)
  .addField("8️⃣ - :video_game: Gaming", "\`osu\` \`valorant\` \`fortnite\` \`lol\`\n\u200b",true) 
  .addField("9️⃣ - ⚙️ Utility", " \`urban\` \`avatar\` \`say\` \`cat\` \`dog\` \`fox\` \`quote\`\n\u200b",true)     
  .setTimestamp()  
  .setFooter('Have a nice day!', process.env.BOT_AVATAR);   
	  
  const embed1 = new Discord.MessageEmbed()
   .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
   .setDescription("Here you can find **<:discord_bot_dev:719520819771998289> Core** commands <a:__:713677852289269761> \n\u200b")
   .setThumbnail(process.env.BOT_AVATAR)
   .addField("p!ping", "<:discord_bot_dev:719520819771998289> Get the time it took the bot to reply.", false)
   .addField("p!server", "<:discord_bot_dev:719520819771998289> JAPAN's Discord invite.", false)
   .addField("p!invite", "<:discord_bot_dev:719520819771998289> Invite the bot to your server.", false)
   .addField("p!support", "<:discord_bot_dev:719520819771998289> Support's Bot server", false)
   .addField("p!serverinfo", "<:discord_bot_dev:719520819771998289> Get the info of the server", false)
   .setTimestamp()  
   .setFooter('Have a nice day!', process.env.BOT_AVATAR);    	  

  const embed2 = new Discord.MessageEmbed()
   .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
   .setDescription("Here you can find **:gem: Social** commands <a:__:713677852289269761> \n\u200b")
   .setThumbnail(process.env.BOT_AVATAR)
   .addField("p!profile/p!profile <@someone>", ":gem: Get your profile's Image/Get someones profile's Image.", false)
   .addField("p!marry <@someone>", ":gem: Ask to marry with someone.", false)
   .addField("p!mymarry", ":gem: Your current wife or husband.", false)
   .addField("p!divorce", ":gem: Divorce of your current marry.", false)
   .addField("p!level", ":gem: Get level card.", false)
   .setTimestamp()  
   .setFooter('Have a nice day!', process.env.BOT_AVATAR); 	  
	  
	  
  message.channel.send(embed)
    .then(msg => { msg.react('1️⃣')
                   msg.react('2️⃣')
                  const filter = (reaction, user) => {
	                return ['1️⃣','2️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                   msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	                        .then(collected => {
		                      const reaction = collected.first();
		                      if (reaction.emoji.name === '1️⃣') {
			              msg.edit(embed1)     
		                      }else if (reaction.emoji.name === '2️⃣') {
			              msg.edit(embed2)        
		                      }
	                        })
	                        .catch(collected => {
		                      
	                        }); 
                 })

  }
};
