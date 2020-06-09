const Discord = require("discord.js");
const pg = require('pg');

const pool = new pg.Pool({
connectionString : process.env.DATABASE_URL,
});
pool.connect()

//pool.query("CREATE TABLE userxp (id INT, xp INT, lvl INT)", (err, res)=>{
// console.log(err,res)
//  pool.end()
// })

module.exports = {
  name: "catch",
  description: "Pinging the bot",
  execute(client, message) {
  
  
  pool.query('ALTER TABLE usersxp ADD COLUMN ctW INT)
  pool.query('ALTER TABLE usersxp ADD COLUMN ctN INT)
  pool.query('ALTER TABLE usersxp ADD COLUMN ctE INT)
  pool.query('ALTER TABLE usersxp ADD COLUMN ctL INT)

  
  
  
  
  }}
