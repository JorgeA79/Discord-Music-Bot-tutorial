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
	  var married = "2";
	  
	   
	  

	   if(!member) return message.reply("Try mentioning the person");
	   if(member.user.id == message.author.id) return message.reply("You cannot marry with yourself");
	   
	  pool.query(`SELECT * FROM usersxp WHERE id = '${member.user.id}'`, (err,result) =>{
          let marry = result.rows[0].marry;
	  
		  
	  if(marry !== null){  
	
	  married = "1";
	  return message.reply("Is already married");	  
	  }
	  });	
	  
	  
	  pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`, (err,result) =>{
		  
	  let marry = result.rows[0].marry;
	  if(marry === null){  	  
	   
	  
		  
	  if(married == "2"){	  
		  
		  
	  message.channel.send(`${member.user}, Do you want to marry with ${message.author}`)
	  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === member.user.id, { time: 10000 });
          console.log(collector)
          collector.on('collect', m => {
          
		  
		  
		  
		  
		 if (m.content == "yes") {
		  
	  	
		pool.query(`UPDATE usersxp SET marry = ${member.user.id} WHERE id = '${message.author.id}'`, console.log);
		pool.query(`UPDATE usersxp SET marry = ${message.author.id} WHERE id = '${member.user.id}'`, console.log);  
		m.channel.send("Accepted");
	  	collector.stop('Collector stopped manually');
	
			   
          } else if (m.content == "no") {
	
  
		m.channel.send("Denied");
		collector.stop('Collector stopped manually'); 
          }  
	  })
	  collector.on('end', collected => {
	  if(collected.size === 0){
	  return message.reply("No one replied");
	  }		  
	  });
		  
		  
	  }	  
		  
	   }else {
	   
	   return message.reply("You are already married");
	   
	   }
	  });
}
}
