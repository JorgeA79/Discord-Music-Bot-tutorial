const db = require('quick.db');
const Discord = require("discord.js");

module.exports = {
  name: "balance",
  description: "Pinging the bot",
  execute(client, message) {

  let sql = `ALTER TABLE usersxp ADD COLUMN money BIGINT;`; 
  pool.query(sql, console.log);
    
}
}
