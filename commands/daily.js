const db = require('quick.db');
const Discord = require("discord.js");
const pg = require('pg')
const pool = new pg.Pool({
	connectionString : process.env.DATABASE_URL,
});
pool.connect()

module.exports = {
  name: "balance",
  description: "Pinging the bot",
  execute(client, message) {

  let sql = `ALTER TABLE usersxp ADD COLUMN lastDaily DATE`;
  pool.query(sql, console.log);
    
}
}
