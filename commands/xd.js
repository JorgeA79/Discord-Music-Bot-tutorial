const Discord = require("discord.js");
const pg = require('pg')

const pool = new pg.Pool({
	connectionString : process.env.DATABASE_URL,
});
pool.connect()

module.exports = {
  name: "xd",
  description: "Pinging the bot",
  execute(client, message) {

pool.query(`ALTER TABLE usersxp ADD COLUMN lapiz INT`, console.log);
pool.query(`ALTER TABLE usersxp ADD COLUMN redstone INT`, console.log);


}
}
