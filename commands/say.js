const Discord = require("discord.js");

module.exports = {
  name: "say",
  description: "Dance with someone owo",
  execute(client, message, args) {
  const argso = message.content.slice(prefix.length).split(` `);
   		message.channel.send(args.splice(1).join(" "));
  }
};
