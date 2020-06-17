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
	  
  const embed3 = new Discord.MessageEmbed()
   .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
   .setDescription("Here you can find **:credit_card: Economy** commands <a:__:713677852289269761> \n\u200b")
   .setThumbnail(process.env.BOT_AVATAR)
   .addField("p!balance/p!balance <@someone>", ":credit_card: Get your balance/Get someones balance.", false)
   .addField("p!daily", ":credit_card: Claim your daily $250.", false)
   .addField("p!slots", ":credit_card: Play slots.", false)
   .setTimestamp()  
   .setFooter('Have a nice day!', process.env.BOT_AVATAR); 

  const embed4 = new Discord.MessageEmbed()
   .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
   .setDescription("Here you can find **:8ball: Fun & Games** commands <a:__:713677852289269761> \n\u200b")
   .setThumbnail(process.env.BOT_AVATAR)
   .addField("p!8ball <question>", ":8ball: Answers yes or no questions.", false)
   .addField("p!flip <head/tail>", ":8ball: Play with a coin.", false)
   .addField("p!ship <@tag1> <@tag2>", ":8ball: Ship two people.", false)
   .addField("p!ratewaifu <waifu>", ":8ball: Rate your waifu.", false)
   .addField("p!catch", ":8ball: Play catching pokemon, use **p!catch help** for more.", false)
   .addField("p!mine", ":8ball: Play minecraft mining, use **p!mine help** for more.", false)
   .setTimestamp()  
   .setFooter('Have a nice day!', process.env.BOT_AVATAR); 	  

  const embed5 = new Discord.MessageEmbed()
   .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
   .setDescription("Here you can find **<:kannaheart:712714267056537641> Roleplay** commands <a:__:713677852289269761> \n\u200b")
   .setThumbnail(process.env.BOT_AVATAR)
   .addField("p!hug <@person>", "<:kannaheart:712714267056537641> Hug someone.", false)
   .addField("p!slap <@person>", "<:kannaheart:712714267056537641> Slap someone.", false)
   .addField("p!kiss <@person>", "<:kannaheart:712714267056537641> Kiss someone.", false) 
   .addField("p!shoot <@person>", "<:kannaheart:712714267056537641> Shoot someone.", false)
   .addField("p!protect <@person>", "<:kannaheart:712714267056537641> Protect someone.", false) 
   .addField("p!wave <@person>", "<:kannaheart:712714267056537641> Wave at someone.", false)
   .addField("p!date <@person>", "<:kannaheart:712714267056537641> Date someone.", false)
   .addField("p!dance <@person>", "<:kannaheart:712714267056537641> Dance with someone.", false)
   .addField("p!pat <@person>", "<:kannaheart:712714267056537641> Pat someone.", false)
   .setTimestamp()  
   .setFooter('Have a nice day!', process.env.BOT_AVATAR); 	  

 const embed6 = new Discord.MessageEmbed()
   .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
   .setDescription("Here you can find **:musical_note: Music** commands <a:__:713677852289269761> \n\u200b")
   .setThumbnail(process.env.BOT_AVATAR)
   .addField("p!play <Your song's link or name>", ":musical_note: Play a song.", false)
   .addField("p!stop", ":musical_note: Stop queue.", false)
   .addField("p!np", ":musical_note: What's now playing.", false)
   .addField("p!queue", ":musical_note: Get current list.", false)
   .addField("p!pause", ":musical_note: Pause current song.", false)
   .addField("p!resume", ":musical_note: Resume current song.", false)
   .addField("p!lyrics", ":musical_note: Lyrics of current song.", false)
   .addField("p!skip", ":musical_note: Skip current song.", false)
   .addField("p!clear", ":musical_note: Clear queue.", false)
   .setTimestamp()  
   .setFooter('Have a nice day!', process.env.BOT_AVATAR); 

const embed7 = new Discord.MessageEmbed()
   .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
   .setDescription("Here you can find **<:pokeb:716936621265518613> Anime** commands <a:__:713677852289269761> \n\u200b")
   .setThumbnail(process.env.BOT_AVATAR)
   .addField("p!pokedex <pokemon>", "<:pokeb:716936621265518613> Get a Pokemon's info.", false)
   .addField("p!anime <anime-name>", "<:pokeb:716936621265518613> Get an Anime description.", false)
   .addField("p!scrap <anime-name> | <episode>", "<:pokeb:716936621265518613> Get an anime episode's link to watch.", false)
   .setTimestamp()  
   .setFooter('Have a nice day!', process.env.BOT_AVATAR);	
	  
const embed8 = new Discord.MessageEmbed()
   .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
   .setDescription("Here you can find **:video_game: Gaming** commands <a:__:713677852289269761> \n\u200b")
   .setThumbnail(process.env.BOT_AVATAR)
   .addField("p!osu <mode> <username>", ":video_game: Osu signature profile.", false)
   .addField("p!valorant", ":video_game: Get valorant commands.", false)
   .addField("p!fortnite <username>", ":video_game: Get a Fortnite user's stats.", false)
   .addField("p!lol <region> <username>", ":video_game: Get a LOL profile stats like masteries or Ranked stats.", false)
   .setTimestamp()  
   .setFooter('Have a nice day!', process.env.BOT_AVATAR);	  

const embed9 = new Discord.MessageEmbed()
   .setTitle("Pixel's Commands")
   .setColor(0xC76CF5)
   .setDescription("Here you can find **:gear: Utility** commands <a:__:713677852289269761> \n\u200b")
   .setThumbnail(process.env.BOT_AVATAR)
   .addField("p!urban <word>", ":gear: Get a word's definition.", false)
   .addField("p!avatar", ":gear: Get someone's profile picture.", false)
   .addField("p!cat", ":gear: Cat images.", false)
   .addField("p!dog", ":gear: Dog images.", false)
   .addField("p!fox", ":gear: Fox images.", false)
   .addField("p!quote", ":gear: Random quotes.", false)
   .setTimestamp()  
   .setFooter('Have a nice day!', process.env.BOT_AVATAR);		  
	  
	  
  message.channel.send(embed)
    .then(msg => { msg.react('1️⃣')
                   msg.react('2️⃣')
		   msg.react('3️⃣')
		   msg.react('4️⃣')
		   msg.react('5️⃣')
		   msg.react('6️⃣')
		   msg.react('7️⃣')
		   msg.react('8️⃣')
		   msg.react('9️⃣')
                  const filter = (reaction, user) => {
	                return ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
                  };
                  
                   msg.awaitReactions(filter, { time: 60000 })
	                        .then(collected => {
		                      const reaction = collected.first();
		                      if (reaction.emoji.name === '1️⃣') {         
			              msg.edit(embed1)     
		                      }else if (reaction.emoji.name === '2️⃣') {
			              msg.edit(embed2)        
		                      }else if (reaction.emoji.name === '3️⃣') {		       
			              msg.edit(embed3)        
		                      }else if (reaction.emoji.name === '4️⃣') {
			              msg.edit(embed4)        
		                      }else if (reaction.emoji.name === '5️⃣') {  
			              msg.edit(embed5)        
		                      }else if (reaction.emoji.name === '6️⃣') { 
			              msg.edit(embed6)        
		                      }else if (reaction.emoji.name === '7️⃣') {	       
			              msg.edit(embed7)        
		                      }else if (reaction.emoji.name === '8️⃣') {      
			              msg.edit(embed8)        
		                      }else if (reaction.emoji.name === '9️⃣') {		       
			              msg.edit(embed9)        
		                      }
			   
	                        })
                 })

  }
};
