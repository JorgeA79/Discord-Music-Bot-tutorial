const Discord = require("discord.js");
const urban = require("urban");
module.exports = {
  name: "urban",
  description: "Pinging the bot",
  execute(client, message, args) {
   
   if(!args[0]) return message.channel.send("You need to specify a word");
   
   let image = "https://origin.marketplaceimages.windowsphone.com/v8/images/5c942bfe-6c90-45b0-8cd7-1f2129c6e319?imageType=ws_icon_medium";
   let search = urban(args.slice(0).join(" ")) 
    try {
    search.first(res =>{
    if(!res) return message.channel.send("No results found for this topic.")
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
            .setThumbanil(image)
            .setFooter(`Written by ${author || "unown"}`);
           
           
           message.channel.send(embed)
    
    })       
    }catch(e){
    return message.channel.send("Couldn't find anything sorry");
    }
}
}
