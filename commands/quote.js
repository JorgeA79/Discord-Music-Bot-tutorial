const Discord = require("discord.js")
const fs = require("fs");

var contents = fs.readFileSync("./commands/quotes/quotes.json");
var jsonContent = JSON.parse(contents);

module.exports = {
  name: "quote",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  var randomQuote = jsonContent.quotes[Math.floor(Math.random() * jsonContent.quotes.length)];
  
            const embed = new Discord.MessageEmbed()
	    .setAuthor(`Quote by ${randomQuote.author}`, 'https://cdn.discordapp.com/avatars/206606985167110145/9313172c11dd84b380d703f1e3855256.png?size=256')
            .setDescription(`${randomQuote.quote}`)
	    .setColor(0xC76CF5)
	    .setFooter('Have a nice day!', process.env.BOT_AVATAR);  
	    message.channel.send(embed);

}
}
