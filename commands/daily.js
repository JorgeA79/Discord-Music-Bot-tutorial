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
  
	  
	  
pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`, (err,result) =>{
   if(err) return err;
	  
  let cooldown = 8.64e+7,
  amount = 250;
  let money;
	
  let lastDaily = result.rows[0].lastD;	  
  if(lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0){
  let timeObj = ms(cooldown -(Date.now() - lastDaily));
  
  message.channel.send(`Your already collected, please wait **${timeObj.hours}h ${timeObj.minutes}m**!`)
  } else {
  message.send(`Succesfully collected $${amount}`);
  
  pool.query(`UPDATE usersxp SET lastD = ${Date.now()} WHERE id = '${message.author.id}'`, console.log);	  
  if(result.rows[0].money === null) money=0;	  
  pool.query(`UPDATE usersxp SET money = ${money + amount} WHERE id = '${message.author.id}'`, console.log);		  
  
  
        }		
	)};  
	   
	   
}
}
