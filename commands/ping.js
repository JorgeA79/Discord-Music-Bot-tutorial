//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "ping",
  description: "Pinging the bot",
  execute(client, message) {
    const embed = new Discord.MessageEmbed()
    .setDescriprion(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``); 
  message.channel.send(embed);
    
}
}
