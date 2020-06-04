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
 
	    let target = message.mentions.users.first() || message.author;

	  pool.query(`SELECT * FROM usersxp WHERE id = '${target.id}'`,(err, result)=>{
          let marryxd = result.rows[0].marry;
		
		  
		   if(err) return err;
    	if(result.rows[0].marry === null){  
    	  const embed = new Discord.MessageEmbed()
          .setDescription(`**${target.username}** is not maried <a:x_:713677703756251147>`)
          .setColor(0xC76CF5);
          return message.channel.send(embed);
	       
    }  
    	let marry = result.rows[0].marry;
         const embed = new Discord.MessageEmbed()
          .setDescription(`${message.author} is maried with <@${marry}> :sparkling_heart:`)
          .setColor(0xC76CF5);
         message.channel.send(embed);
		  
		  
	    });
}
}
