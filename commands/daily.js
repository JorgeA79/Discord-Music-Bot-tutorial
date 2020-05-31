const db = require('quick.db');
const Discord = require("discord.js");
const pg = require('pg')
const pool = new pg.Pool({
	connectionString : process.env.DATABASE_URL,
});
pool.connect()

module.exports = {
  name: "daily",
  description: "Pinging the bot",
  execute(client, message) {
  console.log(Date.now());
  
  let sql = `ALTER TABLE usersxp ADD COLUMN lastD BIGINT`;
  pool.query(sql, console.log);
    
}
}
