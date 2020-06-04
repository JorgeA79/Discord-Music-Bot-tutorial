const Discord = require("discord.js");

module.exports = {
  name: "marry",
  description: "Pinging the bot",
  execute(client, message) {
    
    
 message.channel.send(`Do you want to marry with ${message.author.username}`).then(() => {
	message.channel.awaitMessages(filter, { max: 999, time: 30000, errors: ['time'] })
		.then(collected => {
    
    if (message.author.id === "528854186176282634"){
      if (message.content.startsWith('Yes')) {
        
			message.channel.send(`${collected.first().author} accepted!`);
        
      }else if(message.content.startsWith('No'){
            	message.channel.send(`${collected.first().author} denied!`);   
               }else{
               	message.channel.send(`${collected.first().author}thats not a valid answer!`);
               }
    }else return;
    
    
		})
		.catch(collected => {
			message.channel.send('Looks like nobody got the answer this time.');
		});
});
    
    
}
}
