const db = require('quick.db');
const Discord = require("discord.js");
const pg = require('pg')
const ms = require('parse-ms')
const pool = new pg.Pool({
	connectionString : process.env.DATABASE_URL,
});
pool.connect()

module.exports = {
  name: "reset",
  description: "Pinging the bot",
  execute(client, message) {
 	  
  pool.query(`UPDATE usersxp SET lastD = 0 WHERE id = '${message.author.id}'`, console.log);	  
  pool.query(`UPDATE usersxp SET money = 0 WHERE id = '${message.author.id}'`, console.log);		  
  	   
	   
}
}
