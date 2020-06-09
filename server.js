const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { TOKEN, PREFIX } = require("./config.json")
const oakdexPokedex = require('oakdex-pokedex');


const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const fetch = require("node-fetch"); 

Canvas.registerFont(resolve(join(__dirname, "./fonts/Bebas.ttf")), "Bebas");

client.prefix = PREFIX
client.queue = new Map();

var Pokedex = require('pokedex'),
    pokedex = new Pokedex();




//CLIENT EVENTS
client.on("ready", () => {
  console.log('Ready TO play some soft songs')
  client.user.setActivity("in Japan | p!help")
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
client.on("message", async message => {
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
        		var pokemon = pokedex.pokemon(argsowo.toLowerCase())
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
		}, 25000);
		}
		});

function generateXp(){
let min = 10;
let max = 30;  
return Math.floor(Math.random()*(max - min+1)) + 10;
}


client.on('message', async message => {
	 if (message.author === client.user) return;
 	 if(message.channel.type === "dm") return;
		pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`, (err,result) =>{
      		if(err) return err;
		
		let xp = result.rows[0].xp;

		let currLvl = result.rows[0].lvl;
		if(xp === null) xp = 0;	
		if(currLvl === null) currLvl = 0;
		if(currLvl === null) currLvl = 0;   
    		let nextLvlxp = (eval(currLvl) + eval(1)) * eval(5000); 	   
    		let nextLvl = eval(currLvl) + eval(1);
			
		let money = result.rows[0].money;
   		if(money === null) money=0;
  
 		 var total = 0;
  		total += eval(money) + eval(250); 	  
	  
  				  
		if(xp > nextLvlxp){
    		pool.query(`UPDATE usersxp SET lvl = ${nextLvl} WHERE id = '${message.author.id}'`, console.log);
		pool.query(`UPDATE usersxp SET money = ${total} WHERE id = '${message.author.id}'`, console.log);
			
			 const embed = new discord.MessageEmbed()
            		.setDescription(`Congratulations **${message.author.username}** you leveled up to level **${nextLvl}**\n\u200b`)
			.addField("**Rewards:**", "+ $250",true) 
	    		.setColor(0xC76CF5)
            		.setThumbnail(message.author.displayAvatarURL({ format: 'jpg' }));
			message.channel.send(embed)	
    		}	
			
		});	
	
});


async function profile(member) {
  
  try {
  const result = await fetch(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
  if (!result.ok) throw new Error("Failed to get the avatar.");
  pool.query(`SELECT * FROM usersxp WHERE id = '${member.id}'`,async (err, result)=>{
  if(err) return err;
	  
	  
  const avatar = await result.buffer();
  const name = member.displayName.length > 20 ? member.displayName.substring(0, 17) + "..." : member.displayName;
	  
  let level = result.rows[0].lvl;
  let money = result.rows[0].money;	  
  if (money === null) money =0;
  if (level === null) level =0;	  
	  
	  
  return new Canvas(400, 180)
  // Create the Blurple rectangle on the right side of the image.
  .setColor("#7289DA")
  .addRect(84, 0, 316, 180)
  .setColor("#2C2F33")
  .addRect(0, 0, 84, 180)
  .addRect(169, 26, 231, 46)
  .addRect(224, 108, 176, 46)
  .setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
  .setShadowOffsetY(5) // Drop the shadow by 5 pixels.
  .setShadowBlur(10) // Blur the shadow by 10.
  .addCircle(84, 90, 62)
  .addCircularImage(avatar, 20, 26, 64)
  .save()
  .createBeveledClip(20, 138, 128, 32, 5)
  .setColor("#23272A")
  .fill()
  .restore()
   .setTextAlign("center")
  // I'm using a custom font, which I will show you how to add next.
  .setTextFont("10pt Bebas")
  // Set the colour to white, since we have a dark background for all the text boxes.
  .setColor("#FFFFFF")
  // Add the name variable.
  .addText(name, 285, 54)
  // Using template literals, you can add text and variables, we're applying the toLocaleString()
  // to break up the number into a nice readable format.
  .addText(`Level: ${level}`, 84, 159)
  // Now we want to align the text to the left.
  .setTextAlign("left")
  // Let's add all the points!
  .addText(`Score: ${money}`, 241, 136)	  
  .toBuffer()
	  
	  });

} catch (error) {
  await console.log(error)
}
	
}

 client.on('message', message => {
	  if (message.author === client.user) return;
	  if (message.content.startsWith(PREFIX + "profile")) {
		  
		  
 		  let target = message.mentions.users.first() || message.author;
		  const attachment = new discord.MessageAttachment(profile(target), 'welcome-image.png');
		   message.channel.send(`:round_pushpin:  |  Profile card of ${target.username}`, attachment);	
		  
		  
	  }		  
});
	 
    client.on('message', message => {
	  if (message.author === client.user) return;
	  if (message.content.startsWith(PREFIX + "osu")) {
		const args = message.content.slice(PREFIX.length).split(` `);
		var name = args.splice(2).join("%20");	
		const xd = name.toString();
		const titlexd = xd.replace("%20"," "); 
		
		  
		if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	   	}
		if(!args[1]){
	    	const embed = new discord.MessageEmbed()
            	.setDescription("You need to specify a mode | :exclamation: \n 1. Osu \n 2. Taiko \n 3. CTB \n 4. Mania \n `p!osu <mode> <user>`")
            	.setColor(0xC76CF5)
            	return message.channel.send(embed);
 		}  
		if(!name){
   		const embed = new discord.MessageEmbed()
            	.setDescription("You need to specify an user | :exclamation: \n `p!osu <mode> <user>`")
            	.setColor(0xC76CF5)
            	return message.channel.send(embed);
 		}
		if(args[1] == "osu"){

    		const embed = new discord.MessageEmbed()
           	.setTitle(`${titlexd}'s Signature`)
            	.setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${name}&mode=0&countryrank&flagshadow&flagstroke&darktriangles&opaqueavatar&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
            	.setColor(0xC76CF5);
     		message.channel.send(embed);
    
 		 }
		else if(args[1] == "taiko"){

    		const embed = new discord.MessageEmbed()
           	.setTitle(`${titlexd}'s Signature`)
            	.setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${name}&mode=1&countryrank&flagshadow&flagstroke&darktriangles&opaqueavatar&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
            	.setColor(0xC76CF5);
     		message.channel.send(embed);
    
 		 }
		 else if(args[1] == "ctb"){

    		const embed = new discord.MessageEmbed()
           	.setTitle(`${titlexd}'s Signature`)
            	.setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${name}&mode=2&countryrank&flagshadow&flagstroke&darktriangles&opaqueavatar&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
            	.setColor(0xC76CF5);
     		message.channel.send(embed);
    
 		 }
		else if(args[1] == "mania"){

    		const embed = new discord.MessageEmbed()
           	.setTitle(`${titlexd}'s Signature`)
            	.setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${name}&mode=3&countryrank&flagshadow&flagstroke&darktriangles&opaqueavatar&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
            	.setColor(0xC76CF5);
     		message.channel.send(embed);
    
 		 } else {
		 const embed = new discord.MessageEmbed()
            	.setDescription("You need to specify a mode | :exclamation: \n 1. Osu \n 2. Taiko \n 3. CTB \n 4. Mania \n `p!osu <mode> <user>`")
            	.setColor(0xC76CF5)
            	return message.channel.send(embed);
		 
		 }
	}
});


client.login(process.env.BOT_TOKEN)
