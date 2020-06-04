const Discord = require("discord.js");
const pg = require('pg')

const pool = new pg.Pool({
	connectionString : process.env.DATABASE_URL,
});
pool.connect()


module.exports = {
  name: "mymarry",
  description: "Pinging the bot",
  execute(client, message) {
 

	  pool.query(`SELECT * FROM usersxp WHERE id = '${member.user.id}'`, (err,resultx) =>{
          let marryxd = resultx.rows[0].marry;
		      let author = message.author;
	        message.channel.send(`${author} is maried with <@${marryxd}>`)
	    });
}
}
