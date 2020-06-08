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
  name: "level",
  description: "Pinging the bot",
  execute(client, message) {

//pool.query('INSERT INTO userxp (id, xp, lvl) VALUES ($1, $2, $3)', [idx, xd, dx])

    let target = message.mentions.users.first() || message.author;
    
    pool.query(`SELECT * FROM usersxp WHERE id = '${target.id}'`,(err, result)=>{
    if(err) return err;
    if(!result.rows[0])  return message.channel.send("This user has no xp")
      
    let xp = result.rows[0].xp;
    let currLvl = result.rows[0].lvl;
    if(currLvl === null) currLvl = 0; 
    let nextLvlxp = (eval(currLvl) + eval(1)) * eval(5000); 	     
      
          const embed = new Discord.MessageEmbed()
            			.setDescription(`**Level Card**\n\u200b`)
    	          		.setAuthor(`${target.username}`, `${target.displayAvatarURL({ format: 'jpg' })}`)
			        .addField("**Level:**", `${currLvl}`,true)
                		.addField("**Exp:**", `${xp} / ${nextLvlxp}`,true) 
	    		      .setColor(0xC76CF5)
            		.setThumbnail(target.displayAvatarURL({ format: 'jpg' }));
      
    message.channel.send(embed);  

    }); 
    

}
}
