const Discord = require("discord.js");
const pg = require('pg');

    const pool = new pg.Pool({
	    connectionString : process.env.DATABASE_URL,
	      port: 5432,
        	host: process.env.dbhost,
        	database: process.env.db,
        	user: process.env.user,
        	password: process.env.password,
        	ssl: true,
        })
      pool.connect()
    
//pool.query("CREATE TABLE userxp (id INT, xp INT, lvl INT)", (err, res)=>{
// console.log(err,res)
//  pool.end()
// })

module.exports = {
  name: "xp",
  description: "Pinging the bot",
  execute(client, message) {

//pool.query('INSERT INTO userxp (id, xp, lvl) VALUES ($1, $2, $3)', [idx, xd, dx])

    let target = message.mentions.users.first() || message.author;
    
    pool.query(`SELECT * FROM usersxp WHERE id = '${target.id}'`,(err, result)=>{
    if(err) throw err;
    if(!result.rows[0])  return message.channel.send("This user has no xp")
      
    let xp = result.rows[0].xp;
    message.channel.send(xp);
    }); 
    

}
}
