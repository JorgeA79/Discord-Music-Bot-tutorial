const Discord = require("discord.js");
const pg = require('pg')
const pool = new pg.Pool({
	connectionString : process.env.DATABASE_URL,
});


pool.connect()


module.exports = {
  name: "divorce",
  description: "Pinging the bot",
  execute(client, message) {

    
      pool.query(`UPDATE usersxp SET marry = null WHERE id = '${message.author.id}'`, console.log);		  
       pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`,(err, result)=>{
    	if(err) return err;
    	if(!result.rows[0])  {
	  const embed = new Discord.MessageEmbed()
          .setDescription(`You are not married with anybody! <a:x_:713677703756251147>`)
          .setColor(0xC76CF5);
          message.channel.send(embed);
	}
	 let marry = result.rows[0].marry;       
      	  const embed = new Discord.MessageEmbed()
          .setDescription(`${message.author} divorced from <@${marry}>`)
          .setColor(0xC76CF5);
          message.channel.send(embed);
      
       pool.query(`UPDATE usersxp SET marry = null WHERE id = '${marry}'`, console.log);
    }); 
    
}
}
