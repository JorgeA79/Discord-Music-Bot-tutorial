const Discord = require("discord.js");

module.exports = {
  name: "marry",
  description: "Pinging the bot",
  execute(client, message) {
 
  
const filter = (m, user) => {
return m === message.content.includes('yes') && user.id === message.author.id;
};  
	  
 message.channel.send(`Do you want to marry with ${message.author.username}`).then(() => {
	message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
		        .then(collected => {
  
			message.channel.send(`${collected.first().author} accepted!`);
		
			})
	 
			.catch(collected => {
			message.channel.send('Looks like nobody got the answer this time.');
		});
});
    
    
}
}
