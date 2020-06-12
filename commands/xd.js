//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const pg = require('pg');

const pool = new pg.Pool({
connectionString : process.env.DATABASE_URL,
});
pool.connect()

module.exports = {
  name: "xd",
  description: "Pinging the bot",
  execute(client, message) {
   
        pool.query(`ALTER TABLE usersxp ADD COLUMN pickaxe INT`, console.log)
        pool.query(`ALTER TABLE usersxp ADD COLUMN coal INT`, console.log)
        pool.query(`ALTER TABLE usersxp ADD COLUMN iron INT`, console.log)
        pool.query(`ALTER TABLE usersxp ADD COLUMN gold INT`, console.log)
        pool.query(`ALTER TABLE usersxp ADD COLUMN diamond INT`, console.log)
        pool.query(`ALTER TABLE usersxp ADD COLUMN emerald INT`, console.log)
}
}
