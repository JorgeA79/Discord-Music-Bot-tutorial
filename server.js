const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json")
const Pokedex = require('pokedex.js')
const pokedex = new Pokedex('en')
 
console.log(pokedex.name('Pikachu').get([0]))
// [{"id":"25","localId":{"galar":"194"},"name":"Pikachu","type":["Electric"],"ability":[{"name":"Static","hidden":false},{"name":"Lightning Rod","hidden":true}],"eggGroup":["Field","Fairy"],"baseStats":{"H":"35","A":"55","B":"40","C":"50","D":"50","S":"90"},"generation":1}]



//CLIENT EVENTS
client.on("ready", () => {
  console.log('Ready TO play some soft songs')
  client.user.setActivity("Playing in Japan | p!help")
})

client.on("warn", info => console.log(info));

client.on("error", console.error)

//DEFINIING
client.commands = new discord.Collection()
client.prefix = PREFIX
client.queue = new Map();


//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} //LOADING DONE


//WHEN SOMEONE MESSAGE
client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(PREFIX)) { //IF MESSSAGE STARTS WITH MINE BOT PREFIX
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/) //removing prefix from args
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args)
    } catch (err) { //IF IT CATCH ERROR
      console.log(err)
      message.reply("I am getting error on using this command")
    }
    
  }
  
  
});


    var say = "say";
    client.on('message', message => {
	  if (message.author === client.user) return;
	  if (message.content.startsWith(PREFIX + say)) {
		const args = message.content.slice(PREFIX.length).split(` `);
		message.delete({ timeout: 1000});
		if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	   }
		  
		const embed = new discord.MessageEmbed()
   		.setColor(0xC76CF5)
   		.setDescription(args.splice(1).join(" "))
   		message.channel.send(embed);

		
	}
});

//DONT DO ANYTHING WITH THIS TOKEN lol
client.login(process.env.BOT_TOKEN)
