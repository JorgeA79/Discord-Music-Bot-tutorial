const Discord = require("discord.js");
const urban = require("urban");
const { stripIndents } = require("common-tags");


module.exports = {
  name: "urban",
  description: "Pinging the bot",
  execute(client, message, args) {
   
   if(!args[0]){
	
      const embed = new Discord.MessageEmbed()
      .setDescription("Please specify a word <a:x_:713677703756251147> \n`p!urban <your word>`")
      .setColor(0xC76CF5);
      return message.channel.send(embed);   
	  
   }
   let image = "https://cdn.discordapp.com/attachments/364107994339737600/719582179750969444/unknown.png";
   let search = urban(args.slice(0).join(" ")) 
    try {
    search.first(res =>{
    if(!res){
	const embed = new Discord.MessageEmbed()
      .setDescription("No results found <a:x_:713677703756251147>")
      .setColor(0xC76CF5);
      return message.channel.send(embed);
	   }
    let {word, definition, example, thumbs_up, thumbs_down, permalink, author} = res
    const embed = new Discord.MessageEmbed()
            .setDescription(stripIndents`**Definition:** ${definition || "No definition"}
            **Example:** ${example || "No example"}
            **Upvote:** ${thumbs_up || 0}
            **Downvote:** ${thumbs_down || 0}
            **Link:** [link to ${word}](${permalink || "https://www.urbandictionary.com/"})`)
            .setTimestamp()
	          .setAuthor(`Urban Dictionary | ${word}`, image)
            .setColor(0xC76CF5)
            .setThumbnail(image)
            .setFooter(`Written by ${author || "unown"}`);
           
           
           message.channel.send(embed)
    
    })       
    }catch(e){
    const embed = new Discord.MessageEmbed()
      .setDescription("Couldn't find anything <a:x_:713677703756251147>")
      .setColor(0xC76CF5);
      return message.channel.send(embed);
    }
}
}
