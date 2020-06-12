const Discord = require("discord.js")
const fs = require("fs");

var contents = fs.readFileSync("./commands/quotes/quotes.json");
var jsonContent = JSON.parse(contents);

module.exports = {
  name: "valorant",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  var quotes = jsonContent.quotes;
  
  var randomQuote = quotes[Math.floor(Math.random * quotes.length)]
  
            const embed = new Discord.MessageEmbed()
            .setDescription(`${randomQuote.quote} by ${randomQuote.author}`)
	          .setColor(0xC76CF5)
	          message.channel.send(embed);

}
}
