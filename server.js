const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { TOKEN, PREFIX } = require("./config.json")
const oakdexPokedex = require('oakdex-pokedex');
const Canvasx = require('canvas');

const { Canvas } = require('canvas-constructor');
const { Attachment } = require('discord.js');
const { resolve, join } = require('path');
const fetch = require('node-fetch');

const imageUrlRegex = /\?size=2048$/g;
const placeholder = new Map();

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
	  if (message.content.startsWith(PREFIX + "pokedex")) {
		const args = message.content.slice(PREFIX.length).split(` `);
		const argsowo = args.splice(1).join(" ");  
			
		  	if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	   		}
		  
		    try {
        		var pokemon = pokedex.pokemon(argsowo)
			console.dir(pokemon);    
			    
			var name = pokemon.name.toString();
    			var id = pokemon.id;
    			var height = pokemon.height;
    			var weight = pokemon.weight;
    			var sprite = pokemon.sprites.animated;
    			var exp = pokemon.base_experience;    
			var pokemonL = name.charAt(0).toUpperCase();
			var pokemonM = name.slice(1); 
			var pokemonX = pokemonL + pokemonM;			    
			const pokemonE = oakdexPokedex.findPokemon(pokemonX)
			var abilities = pokemonE.abilities
			var types = pokemonE.types
			var entry = pokemonE.pokedex_entries
			var hp = pokemonE.base_stats.hp
			var atk = pokemonE.base_stats.atk
			var def = pokemonE.base_stats.def
			var sp_atk = pokemonE.base_stats.sp_atk
			var sp_def = pokemonE.base_stats.sp_def
			var speed = pokemonE.base_stats.speed
			var evo = pokemonE.evolution_from
			var desc = "";
			var color = 0xC76CF5;    
			console.log(abilities[0].name);
			console.log(evo);
			    
			if(!evo){
			desc = "This Pokemon doesn't evolve from anything";
			}else{	
			desc = `It evolves from ${evo}`;	
			}	    
			    
			if(types[0] == "Fire"){
			color = 0xFF7F08;
			}	
			else if(types[0] == "Grass"){
			color = 0x55B533;   
			}  
			else if(types[0] == "Water"){
			color = 0x4F5BFF;   
			} 
			else if(types[0] == "Bug"){
			color = 0x7EFF4F;   
			}  
			else if(types[0] == "Ground"){
			color = 0x734802;   
			}
			else if(types[0] == "Rock"){
			color = 0x4D4232;   
			}  
			else if(types[0] == "Flying"){
			color = 0x9EFFF9;   
			} 
			else if(types[0] == "Electric"){
			color = 0xFFE629;   
			}  
			else if(types[0] == "Steel"){
			color = 0xA6A6A4;   
			}
			else if(types[0] == "Dragon"){
			color = 0xCD36FF;   
			}  
			else if(types[0] == "Poison"){
			color = 0x6E0491;   
			}
			else if(types[0] == "Fighting"){
			color = 0x522C01;   
			}  
			else if(types[0] == "Psychic"){
			color = 0xFF0DDF;   
			} 
			else if(types[0] == "Ice"){
			color = 0x0DE3FF;   
			}
			else if(types[0] == "Ghost"){
			color = 0x4E0DD1;   
			}  
			else if(types[0] == "Normal"){
			color = 0xFFFFFF;   
			}      
		    	else if(types[0] == "Dark"){
			color = 0x2B2B2B;   
			}    			    		    
			else if(types[0] == "Fairy"){
			color = 0xF79CFF;   
			}
			    
          		const embed = new discord.MessageEmbed()
          		.setTitle(`${pokemonX} #${id}`)
			.setDescription(desc)
			.setThumbnail(pokemon.sprites.animated)
			.addField("Types", "\`"+ types +"\`")
			.addField("Base Stats",`**HP:** ${hp} \n**ATK:** ${atk} \n **DEF:** ${def} \n**SP.ATK:** ${sp_atk} \n**SP.DEF:** ${sp_def} \n**SPEED:** ${speed}` , true)
			.addField("Height", "\`"+ height/10 +"m\`", true)
			.addField("Weight", "\`"+ weight/10 +"kg\`", true)
			.addField("Ability","\`"+ abilities[0].name +"\`",true)
			.addField("Base Experience", "\`"+ exp +"\`", true)
          		.setColor(color);
           		message.channel.send(embed);
    			
		   	} catch(e) {
        		console.log(e);
			const embed = new discord.MessageEmbed()
			.setDescription(`Thats not a pokemon, ${message.author}!`)
          		.setColor(0xC76CF5);
           		message.channel.send(embed);  
    			}
	  	

		  }
});


const pg = require('pg')
const pool = new pg.Pool({
	connectionString : process.env.DATABASE_URL,
});
pool.connect()

const talkedRecently = new Set();
client.on('message', async message => {
	 if (message.author === client.user) return;
 	 if(message.channel.type === "dm") return;
	 if (talkedRecently.has(message.author.id)) {
           
 } else {
    
		pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`, (err,result) =>{
      		if(err) return err;
   		let sql;  
    		if(!result.rows[0]){
    		sql = `INSERT INTO usersxp (id,xp) VALUES ('${message.author.id}', ${generateXp()})`;
    		} else {
     		let xp = result.rows[0].xp;
     		sql = `UPDATE usersxp SET xp = ${xp + generateXp()} WHERE id = '${message.author.id}'`;
          
    		}  
    		pool.query(sql, console.log);
    		});
	    
	        talkedRecently.add(message.author.id);
	    
   		setTimeout(() => {
 
 		talkedRecently.delete(message.author.id);
		}, 60000);
		}
		});

function generateXp(){
let min = 10;
let max = 30;  
return Math.floor(Math.random()*(max - min+1)) + 10;
}


client.on('message', async message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(PREFIX + "image")) {
	
		  
	 	  
	let target = message.mentions.users.first() || message.author;
    
    	pool.query(`SELECT * FROM usersxp WHERE id = '${target.id}'`,async (err, result)=>{
    	if(err) return err;
    	if(!result.rows[0])  return message.channel.send("This user has no xp")
      
    	let xp = result.rows[0].xp;
	let money = result.rows[0].money;
			
			
	const canvas = Canvasx.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvasx.loadImage('./OWO.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);


	ctx.font = '28px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`Your XP: ${xp}`, canvas.width / 2.5, canvas.height / 1.8);
	ctx.fillText(`Your money: $${money}`, canvas.width / 2.5, canvas.height / 1.5);	

	ctx.font = applyText(canvas, `${target.username}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${target.username}!`, canvas.width / 2.5, canvas.height / 3.5);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvasx.loadImage(target.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);
	const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
	message.channel.send(`OwO, ${target.username}!`, attachment);			
		}); 	  		
	}
});

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;
	do {

	ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);
	return ctx.font;
};

client.on('message', async message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(PREFIX + "profile")) {
	
	const key = `${message.guild.id}-${message.author.id}`;

  try {
    if (!placeholder.has(key)) {
      placeholder.set(key, {
        user: message.author.id, guild: message.guild.id, points: 500, level: 17
      });
    }

    const buffer = await profile(message, placeholder.get(key));
    const filename = `profile-${message.author.id}.jpg`;
    const attachment = new Attachment(buffer, filename);
    await message.channel.send(attachment);
    
  } catch (error) {
    client.logger.error(error.stack);
    return message.channel.send(`An error ocurred: **${error.message}**`);
  }
		
	}
});

async function profile(message, score) {
  const key = `${message.guild.id}-${message.author.id}`;
  const member = message.member;
  const { level, points } = placeholder.get(key);

  try {
    const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, '?size=128'));
    if (!result.ok) throw new Error('Failed to get the avatar!');
    const avatar = await result.buffer();

    const name = member.username.length > 30 ? member.username.substring(0, 17) + '...'
      : member.displayName;

    return new Canvas(400, 180)
      .setColor('#7289DA')
      .addRect(84, 0, 316, 180)
      .setColor("#2C2F33")
      .addRect(0, 0, 84, 180)
      .addRect(169, 26, 231, 46)
      .addRect(224, 108, 176, 46)
      .setShadowColor('rgba(22, 22, 22, 1)')
      .setShadowOffsetY(5)
      .setShadowBlur(10)
      .addCircle(84, 90, 62)
      .addCircularImage(avatar, 85, 90, 64)
      .save()
      .createBeveledClip(20, 138, 128, 32, 5)
      .setColor('#23272A')
      .fill()
      .restore()
      .setTextAlign('center')
      .setTextFont('18pt Klavika Regular')
      .setColor('#FFFFFF')
      .addText(name, 285, 54)
      .setTextAlign('left')
      .toBuffer();
  } catch (error) {
    await message.channel.send(`An error occurred: **${error.message}**`);
  }
}

client.login(process.env.BOT_TOKEN)
