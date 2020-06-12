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

 pool.query(`UPDATE usersxp SET pickaxe = 2 WHERE id = '${message.author.id}'`, console.log)

}
}
