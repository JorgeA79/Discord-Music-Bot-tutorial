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

  let target = message.mentions.users.first() || message.author;
    
    pool.query(`SELECT * FROM usersxp WHERE id = '${target.id}'`,(err, result)=>{
    if(err) return err;
    if(result.rows[0].money === null){  
    	  const embed = new Discord.MessageEmbed()
          .setDescription(`**${target.username}** has no money <a:x_:713677703756251147>`)
          .setColor(0xC76CF5);
          return message.channel.send(embed);
	       
    }  
    let money = result.rows[0].money;
    message.channel.send(money);
    }); 
    
}
}
