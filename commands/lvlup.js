
const Discord = require("discord.js");

module.exports = {
  name: "lvlupo",
  description: "Pinging the bot",
  execute(client, message) {
    
    pool.query(`UPDATE usersxp SET xp = 20000 WHERE id = '${message.author.id}'`, console.log);

    
}
}
