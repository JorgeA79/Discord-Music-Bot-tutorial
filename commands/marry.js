const Discord = require("discord.js");
const pg = require('pg')

const pool = new pg.Pool({
	connectionString : process.env.DATABASE_URL,
});
pool.connect()


module.exports = {
  name: "marry",
  description: "Pinging the bot",
  execute(client, message) {
 
	  let member = message.mentions.members.first();  		  
	  var married = "0";
	  
	   
	  

	   if(!member) return message.reply("Try mentioning the person");
	   if(member.user.id == message.author.id) return message.reply("You cannot marry with yourself");
	   
	  pool.query(`SELECT * FROM usersxp WHERE id = '${member.user.id}'`, (err,resultx) =>{
          let marryxd = resultx.rows[0].marry;
		  
	  if(marryxd === null){  
	  
		  pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`, (err,result) =>{	  
	  let marry = result.rows[0].marry;
	  if(marry === null){  	 	  
		  
	  message.channel.send(`${member.user}, Do you want to marry with ${message.author}` + "` <Answer with yes or no>`")
	  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === member.user.id, { time: 10000 });
          console.log(collector)
          collector.on('collect', m => {
          
		  
		 if (m.content.toLowerCase() == "yes") {
		  
	  	
		pool.query(`UPDATE usersxp SET marry = ${member.user.id} WHERE id = '${message.author.id}'`, console.log);
		pool.query(`UPDATE usersxp SET marry = ${message.author.id} WHERE id = '${member.user.id}'`, console.log);  
		 const embed = new Discord.MessageEmbed()
                .setDescription(`**${message.author.username}** is now maried **${member.user.username}**`)
	        .setColor(0xC76CF5)
                .setImage("https://media1.tenor.com/images/783e9568a1c06da76a50dc2c98129f11/tenor.gif?itemid=12390162");
	        m.channel.send(embed);
	  	collector.stop('Collector stopped manually');
	
			   
          } else if (m.content.toLowerCase() == "no") {
	
  		 const embed = new Discord.MessageEmbed()
                .setDescription(`**${message.author.username}** was rejected by **${member.user.username}**`)
	        .setColor(0xC76CF5)
                .setImage("https://data.whicdn.com/images/20070149/original.gif");
	        m.channel.send(embed);
		collector.stop('Collector stopped manually'); 
          }  
	  })
		  
	  collector.on('end', collected => {
	  if(collected.size === 0){
	  return message.reply("No one replied");
	  }		  
	  });
		  
	   }else {
	   
	   return message.reply("You are already married");
	   
	   }
	  });
	  }else{
	  return message.reply("That user is already married");
	  }
	    });
}
}
