const db = require('quick.db');
const Discord = require("discord.js");
const pg = require('pg')
const ms = require('parse-ms')
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
  let cooldown = 86400000;
  var amount = 250;
 
	
  let lastDaily = result.rows[0].lastd;
	
  console.log(lastDaily)	
  if(lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0){
	  
  let timeObj = ms(cooldown -(Date.now() - lastDaily));
  
  message.channel.send(`Your already collected, please wait **${timeObj.hours}h ${timeObj.minutes}m**!`);
  let money = result.rows[0].money;
	  
  console.log(total);
  } else {
	  
  message.channel.send(`Succesfully collected $${amount}`);
  
  pool.query(`UPDATE usersxp SET lastD = ${Date.now()} WHERE id = '${message.author.id}'`, console.log);	  
  
   let money = result.rows[0].money;
   if(money === null) money=0;
  
  var total = 0;
  total += eval(money) + eval(amount); 	  
	  
  pool.query(`UPDATE usersxp SET money = ${total} WHERE id = '${message.author.id}'`, console.log);		  
  
  
        }		
	});  
	   
	   
}
}
