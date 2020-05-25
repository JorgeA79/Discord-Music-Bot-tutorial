const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json")

client.prefix = PREFIX
client.queue = new Map();

var Pokedex = require('pokedex'),
    pokedex = new Pokedex();

//CLIENT EVENTS
client.on("ready", () => {
  console.log('Ready TO play some soft songs')
  client.user.setActivity("Playing in Japan | p!help")
})

client.on("warn", info => console.log(info));

client.on("error", console.error)

//DEFINIING
client.commands = new discord.Collection()

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

client.on('message', message => {
	  if (message.author === client.user) return;
	  if (message.content.startsWith(PREFIX + say)) {
		const args = message.content.slice(PREFIX.length).split(` `);
		const argsowo = args.splice(1).join(" ");  
 	if (!argsowo.length) {
          const embed = new Discord.MessageEmbed()
          .setDescription("**You didn't write any Pokemon** <a:x_:713677703756251147>")
          .setColor(0xC76CF5);
          return message.channel.send(embed);
    }

    var pokemon = pokedex.pokemon(argsowo); 
    console.dir(pokemon);
    var name = pokemon.name;
    var id = pokemon.id;
    var height = pokemon.height;
    var weight = pokemon.weight;
    var sprite = pokemon.sprites.animated;
    var exp = pokemon.base_experience;

          const embed = new Discord.MessageEmbed()
          .setDescription('')
          .setColor(0xC76CF5);
           message.channel.send(embed);

	  }catch (err) { //IF IT CATCH ERROR
      console.log(err)
      message.channel.send("I am getting error on using this command")
    }
});
//DONT DO ANYTHING WITH THIS TOKEN lol
client.login(process.env.BOT_TOKEN)
