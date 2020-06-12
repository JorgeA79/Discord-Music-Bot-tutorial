//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
const pg = require('pg');

const pool = new pg.Pool({
connectionString : process.env.DATABASE_URL,
});
pool.connect()

//Wooden animation

var pickaxe1 = "<:woodenPix1:720518856694824960>";
var pickaxe2 = "<:woodenPix2:720518856480784435>";





module.exports = {
  name: "mine",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  if(!args[0]){

    
   pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`,(err, result)=>{
    
     
      let money = result.rows[0].money;
      let pickaxe = result.rows[0].pickaxe;
      if(pickaxe === null) pickaxe = 0;
      let coal = result.rows[0].coal;
      let iron = result.rows[0].iron;
      let gold = result.rows[0].gold;
      let diamond = result.rows[0].diamond;
      let emerald = result.rows[0].emerald;
      let lapiz = result.rows[0].lapiz;
      let redstone = result.rows[0].redstone; 	   
      if(coal === null) coal=0;
      if(iron === null) iron=0; 
      if(gold === null) gold=0; 
      if(diamond === null) diamond=0;
      if(emerald === null) emerald=0;
      if(lapiz === null) lapiz=0;
      if(redstone === null) redstone=0;  	   
      var xd = 0;
	   
      if(money < 10){	
      const embed = new Discord.MessageEmbed()
  	.setTitle("<:pickaxeD:720589176210325514> | Mining")
  	.setDescription(`\u200b\n${pickaxe2} You don't have enough money!**Required:** 10\n\u200b`)
  	.setColor(0xC76CF5)
  	return message.channel.send(embed);
      }    
	   
	   
      let testValues = [{
      value : 'Coal',
      probability: 0.3
      },
      {
      value : 'Iron',
      probability: 0.3
      },
      {
      value : 'Gold',
      probability: 0.2
      },
      {
      value : 'Diamond',
      probability: 0.1
      },
      {
      value : 'Emerald',
      probability: 0.1
      }]
    
  if(pickaxe == "0"){
  pickaxe1 = "<:woodenPix1:720518856694824960>";
  pickaxe2 = "<:woodenPix2:720518856480784435>";
  mineralsx = [":coal:720523944548892732",":coal:720523944548892732"]; 
    
      testValues = [{
      value : 'Coal',
      probability: 0.5
      },
      {
      value : 'Coal',
      probability: 0.5
      }]  
    
  } 
  
  if(pickaxe == "1"){
  pickaxe1 = "<:StoneP2:720617209851805752>";
  pickaxe2 = "<:stoneP:720616972944932865>"; 
  mineralsx = [":coal:720523944548892732",":iron_ingot:720528333879771197"];
    
    testValues = [{
      value : 'Coal',
      probability: 0.4
      },
      {
      value : 'Iron',
      probability: 0.4
      },
      {
      value : 'Lapiz',
      probability: 0.2
      }	 ]
  } 
    
  if(pickaxe == "2"){
  pickaxe1 = "<:ironP2:720617209797279777>";
  pickaxe2 = "<:ironP:720616972995526676>";
  mineralsx = [":coal:720523944548892732",":iron_ingot:720528333879771197", ":gold_ingot:720528333879640134",":diamond:720528333732839477","<:emerald:720528333862993991>"]; 
    
    testValues = [{
      value : 'Coal',
      probability: 0.1
      },
      {
      value : 'Iron',
      probability: 0.3
      },
      {
      value : 'Gold',
      probability: 0.2
      },
      {
      value : 'Diamond',
      probability: 0.1
      },
      {
      value : 'Emerald',
      probability: 0.1
      },
      {
      value : 'Lapiz',
      probability: 0.2
      },{
      value : 'Redstone',
      probability: 0.2
      }		
		 ]
  }  
    
  if(pickaxe == "3"){
  pickaxe1 = "<:pickaxeD2:720589176214519848>";
  pickaxe2 = "<:pickaxeD:720589176210325514>";
  mineralsx = [":coal:720523944548892732",":iron_ingot:720528333879771197", ":gold_ingot:720528333879640134",":diamond:720528333732839477","<:emerald:720528333862993991>"];  
    
    testValues = [{
      value : 'Coal',
      probability: 0.1
      },
      {
      value : 'Iron',
      probability: 0.3
      },
      {
      value : 'Gold',
      probability: 0.2
      },
      {
      value : 'Diamond',
      probability: 0.3
      },
      {
      value : 'Emerald',
      probability: 0.1
      },
      {
      value : 'Lapiz',
      probability: 0.2
      },{
      value : 'Redstone',
      probability: 0.2
      }]
  }   
   
  var anim1 = `<:steve:720530349121208357>${pickaxe2}<:stone1:720518856350892119>`;
  var anim2 = `<:steve:720530349121208357>${pickaxe1}<:stone2:720518856694693889>`;
  var anim3 = `<:steve:720530349121208357>${pickaxe2}<:stone3:720518856707407942>`;
  var anim4 = `<:steve:720530349121208357>${pickaxe1}`;
   
	   
  var totalplay = eval(money) - eval(10)	   
	   
  pool.query(`UPDATE usersxp SET money = ${totalplay} WHERE id = '${message.author.id}'`, console.log);	   
	   
  const embedU = new Discord.MessageEmbed()
  .setTitle("<:lucky:720574567571128341> | Mining.\n\u200b")
  .setDescription(`<:steve:720530349121208357>${pickaxe1}<:stone:720518856635973712>\n\u200b`)
  .setFooter(`${message.author.username} is mining...`)
  .setColor(0xC76CF5);
  message.channel.send(embedU).then((sentMessage) => {    
    
    //First Animation
    setTimeout(function(){ 
      const embed = new Discord.MessageEmbed()
      .setTitle("<:lucky:720574567571128341> | Mining..\n\u200b")
      .setDescription(`${anim1}\n\u200b`)
      .setFooter(`${message.author.username} is mining...`)
      .setColor(0xC76CF5);  
    sentMessage.edit(embed) 
    }, 1000);  
    
    //Second animation
    setTimeout(function(){ 
      const embed = new Discord.MessageEmbed()
      .setTitle("<:lucky:720574567571128341> | Mining...\n\u200b")
      .setDescription(`${anim2}\n\u200b`)
      .setFooter(`${message.author.username} is mining...`)
      .setColor(0xC76CF5);  
      sentMessage.edit(embed)
    }, 2000);
    
    
    
    //Third animation
    setTimeout(function(){ 
      const embed = new Discord.MessageEmbed()
      .setTitle("<:lucky:720574567571128341> | Mining.\n\u200b")
      .setDescription(`${anim3}\n\u200b`)
      .setFooter(`${message.author.username} is mining...`)
      .setColor(0xC76CF5);  
    sentMessage.edit(embed)
    }, 3000);
   setTimeout(function(){ 
    
       //Get mineral
      const randomizer = (values) => {
      let i, pickedValue,
            randomNr = Math.random(),
            threshold = 0;
       for (i = 0; i < values.length; i++) {
        if (values[i].probability === '*') {
            continue;
       }
       threshold += values[i].probability;
       if (threshold > randomNr) {
                pickedValue = values[i].value;
                break;
       }
       if (!pickedValue) {
            //nothing found based on probability value, so pick element marked with wildcard
            pickedValue = values.filter((value) => value.probability === '*');
       }
       }
       return pickedValue;
       }    
     
      var emote = ":coal:720523944548892732";
      var textx = randomizer(testValues);
     
      if(textx == "Coal"){ 
        emote = ":coal:720523944548892732";
        xd = eval(coal) + eval(1)
        pool.query(`UPDATE usersxp SET coal = ${xd} WHERE id = '${message.author.id}'`, console.log)
      }
      if(textx == "Iron"){ 
        emote = ":iron_ingot:720528333879771197";
        xd = eval(iron) + eval(1)
        pool.query(`UPDATE usersxp SET iron = ${xd} WHERE id = '${message.author.id}'`, console.log)
      }
      if(textx == "Gold"){ 
        emote = ":gold_ingot:720528333879640134";
        xd = eval(gold) + eval(1)
        pool.query(`UPDATE usersxp SET gold = ${xd} WHERE id = '${message.author.id}'`, console.log)
      }
      if(textx == "Diamond"){ 
        emote = ":diamond:720528333732839477";
        xd = eval(diamond) + eval(1)
        pool.query(`UPDATE usersxp SET diamond = ${xd} WHERE id = '${message.author.id}'`, console.log)
      }
      if(textx == "Emerald"){ 
        emote = ":emerald:720528333862993991";
        xd = eval(emerald) + eval(1)
        pool.query(`UPDATE usersxp SET emerald = ${xd} WHERE id = '${message.author.id}'`, console.log)
      }
      if(textx == "Lapiz"){ 
        emote = ":BlueDye:720890039738957934";
        xd = eval(lapiz) + eval(1)
        pool.query(`UPDATE usersxp SET lapiz = ${xd} WHERE id = '${message.author.id}'`, console.log)
      }	
      if(textx == "Redstone"){ 
        emote = ":Redstone:720890039751671868";
        xd = eval(redstone) + eval(1)
        pool.query(`UPDATE usersxp SET redstone = ${xd} WHERE id = '${message.author.id}'`, console.log)
      }	    
	   
      const embed = new Discord.MessageEmbed()
      .setTitle(`<:lucky:720574567571128341> | You got ${textx}\n\u200b`)
      .setDescription(`${anim4}<${emote}>\n\u200b`)
      .setFooter(`${message.author.username} mined some ${textx}`)
      .setColor(0xC76CF5);  
    sentMessage.edit(embed)
    }, 4000);
    })
      
   }); 
  }
  if(args[0]== "inv" ||args[0] == "inventory"){
    
  //Inventario de minerales
  pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`,(err, result)=>{  
 
    let money = result.rows[0].money;
      let pickaxe = result.rows[0].pickaxe;
      if(pickaxe === null) pickaxe = 0;
      let coal = result.rows[0].coal;
      let iron = result.rows[0].iron;
      let gold = result.rows[0].gold;
      let diamond = result.rows[0].diamond;
      let emerald = result.rows[0].emerald;
      if(coal === null) coal=0;
      if(iron === null) iron=0; 
      if(gold === null) gold=0; 
      if(diamond === null) diamond=0;
      if(emerald === null) emerald=0;  
      let lapiz = result.rows[0].lapiz;
      let redstone = result.rows[0].redstone; 	  
      if(lapiz === null) lapiz=0;
      if(redstone === null) redstone=0;  
      
  const embed = new Discord.MessageEmbed()
  .setTitle("<:pickaxeD:720589176210325514> | Mining Inventory")
  .setDescription(`<:coal:720523944548892732>**Coal:** ${coal}\n<:BlueDye:720890039738957934>**Lapiz:** ${lapiz}\n<:Redstone:720890039751671868>**Redstone:** ${redstone}\n<:iron_ingot:720528333879771197>**Iron:** ${iron}\n<:gold_ingot:720528333879640134>**Gold:** ${gold}\n<:diamond:720528333732839477>**Diamond:** ${diamond}\n<:emerald:720528333862993991>**Emeralds:** ${emerald}\n\u200b`)
  .setColor(0xC76CF5)
  .setFooter('Have a nice day!', process.env.BOT_AVATAR);
  message.channel.send(embed);  
    
  });  
  }
    
  if(args[0]== "sell"){
  //Vender minerales
  pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`,(err, result)=>{ 	  
   let money = result.rows[0].money;
      let pickaxe = result.rows[0].pickaxe;
      if(pickaxe === null) pickaxe = 0;
      let coal = result.rows[0].coal;
      let iron = result.rows[0].iron;
      let gold = result.rows[0].gold;
      let diamond = result.rows[0].diamond;
      let emerald = result.rows[0].emerald;
      if(coal === null) coal=0;
      if(iron === null) iron=0; 
      if(gold === null) gold=0; 
      if(diamond === null) diamond=0;
      if(emerald === null) emerald=0;  
      let lapiz = result.rows[0].lapiz;
      let redstone = result.rows[0].redstone; 	  
      if(lapiz === null) lapiz=0;
      if(redstone === null) redstone=0;  	  
	var minTotal = 0;    
	  
	  
   if(!args[1]){
  const embed = new Discord.MessageEmbed()
  .setDescription("Please specify what you want to sell: \n`p!mine sell <item>`\n<:coal:720523944548892732> | Coal\n<:iron_ingot:720528333879771197> | Iron\n<:BlueDye:720890039738957934> | Lapiz\n<:Redstone:720890039751671868> | Redstone\n<:gold_ingot:720528333879640134> | Gold\n<:diamond:720528333732839477> | Diamond\n<:emerald:720528333862993991> | Emerald")
  .setColor(0xC76CF5)
  return message.channel.send(embed); 
  } 
  	else if(args[1].toLowerCase() =="coal"){
  const embed = new Discord.MessageEmbed()
  .setTitle("<:diamond:720528333732839477> | Minerals Bank")
  .setDescription(`Succesfully sold ${coal} **Coal** <:coal:720523944548892732>`)
  .setColor(0xC76CF5)
  message.channel.send(embed);	  	  
  minTotal = eval(money) + (eval(coal)*eval(8));
  pool.query(`UPDATE usersxp SET money = ${minTotal} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET coal = 0 WHERE id = '${message.author.id}'`, console.log);   
  } 
	  else if(args[1].toLowerCase() =="iron"){
  const embed = new Discord.MessageEmbed()
  .setTitle("<:diamond:720528333732839477> | Minerals Bank")
  .setDescription(`Succesfully sold ${iron} **Iron** <:iron_ingot:720528333879771197>`)
  .setColor(0xC76CF5)
  message.channel.send(embed);	  	  
  minTotal = eval(money) + (eval(iron)*eval(12));
  pool.query(`UPDATE usersxp SET money = ${minTotal} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET iron = 0 WHERE id = '${message.author.id}'`, console.log);   
  } 
	  else if(args[1].toLowerCase() =="lapiz"){
  const embed = new Discord.MessageEmbed()
  .setTitle("<:diamond:720528333732839477> | Minerals Bank")
  .setDescription(`Succesfully sold ${lapiz} **Lapiz** <:BlueDye:720890039738957934>`)
  .setColor(0xC76CF5)
  message.channel.send(embed);	  	  
  minTotal = eval(money) + (eval(lapiz)*eval(20));
  pool.query(`UPDATE usersxp SET money = ${minTotal} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET lapiz = 0 WHERE id = '${message.author.id}'`, console.log);   
  } 
	  else if(args[1].toLowerCase() =="redstone"){
  const embed = new Discord.MessageEmbed()
  .setTitle("<:diamond:720528333732839477> | Minerals Bank")
  .setDescription(`Succesfully sold ${redstone} **Redstone** <:Redstone:720890039751671868>`)
  .setColor(0xC76CF5)
  message.channel.send(embed);	  	  
  minTotal = eval(money) + (eval(redstone)*eval(20));
  pool.query(`UPDATE usersxp SET money = ${minTotal} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET redstone = 0 WHERE id = '${message.author.id}'`, console.log);   
  } 
	  else if(args[1].toLowerCase() =="gold"){
  const embed = new Discord.MessageEmbed()
  .setTitle("<:diamond:720528333732839477> | Minerals Bank")
  .setDescription(`Succesfully sold ${gold} **Gold** <:gold_ingot:720528333879640134>`)
  .setColor(0xC76CF5)
  message.channel.send(embed);	  	  
  minTotal = eval(money) + (eval(gold)*eval(50));
  pool.query(`UPDATE usersxp SET money = ${minTotal} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET gold = 0 WHERE id = '${message.author.id}'`, console.log);   
  }
	  else if(args[1].toLowerCase() =="diamond"){
  const embed = new Discord.MessageEmbed()
  .setTitle("<:diamond:720528333732839477> | Minerals Bank")
  .setDescription(`Succesfully sold ${diamond} **Diamond** <:diamond:720528333732839477>`)
  .setColor(0xC76CF5)
  message.channel.send(embed);	  	  
  minTotal = eval(money) + (eval(diamond)*eval(100));
  pool.query(`UPDATE usersxp SET money = ${minTotal} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET diamond = 0 WHERE id = '${message.author.id}'`, console.log);   
  } 
	  else if(args[1].toLowerCase() =="emerald"){
  const embed = new Discord.MessageEmbed()
  .setTitle("<:diamond:720528333732839477> | Minerals Bank")
  .setDescription(`Succesfully sold ${emerald} **Emerald** <:emerald:720528333862993991>`)
  .setColor(0xC76CF5)
  message.channel.send(embed);	  	  
  minTotal = eval(money) + (eval(emerald)*eval(300));
  pool.query(`UPDATE usersxp SET money = ${minTotal} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET emerald = 0 WHERE id = '${message.author.id}'`, console.log);   
  }
	  
	  
  });	  
  }
  if(args[0] == "help"){
  //Menu de ayuda
	  
    const embed = new Discord.MessageEmbed()
    .setTitle("<:pickaxeD:720589176210325514> | Mining Commands")
    .setDescription(`This are all the commmands related to the Minecraft mining minigame!, ${message.author}\n\u200b`)
    .addField("p!mine:", `<:Chest:720931331084779541> Mine one random mineral.`, false)
    .setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f920779b-7247-49d5-b7f5-3483dab93123/d3d4y5a-f1458401-fe81-4c49-8bd6-cb864337e4ea.png/v1/fill/w_1748,h_457,q_70,strp/minecraft_panorama_by_liliotheone_d3d4y5a-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD00OTgiLCJwYXRoIjoiXC9mXC9mOTIwNzc5Yi03MjQ3LTQ5ZDUtYjdmNS0zNDgzZGFiOTMxMjNcL2QzZDR5NWEtZjE0NTg0MDEtZmU4MS00YzQ5LThiZDYtY2I4NjQzMzdlNGVhLnBuZyIsIndpZHRoIjoiPD0xOTAzIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.VyU2vuvmLhQJrNoKFn2nzz2bt8Py_2bDdJ4G1sxbUvA')
    .addField("p!mine inv || p!mine inventory:", `<:Chest:720931331084779541> Get your inventory of mining.`, false)
    .addField("p!mine pickaxe", `<:Chest:720931331084779541> Get your actual pickaxe.`, false)
    .addField("p!mine pickaxe upgrade", `<:Chest:720931331084779541> Upgrade your actual pickaxe.`, false)
    .addField("p!mine sell <item-name>", `<:Chest:720931331084779541> Sell your minerals.`, false)
    .setColor(0xC76CF5);
    return message.channel.send(embed);	  
	  
  }
  if(args[0] == "pickaxe"){
  //Menu y mejoras del pico
    
    
    
  pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`,(err, result)=>{ 
    
  let money = result.rows[0].money;
  let pickaxe = result.rows[0].pickaxe;
  var text = "";  
  var text2 = "";
  var price = 500;
  if(pickaxe === null) pickaxe = 0;  
  if(pickaxe == "0"){
  pickaxe1 = "<:woodenPix1:720518856694824960>";
  pickaxe2 = "<:woodenPix2:720518856480784435>";
  text = "Wooden Pickaxe";
  text2 = "Stone Pickaxe";
  price = 500;  
  } 
  
  if(pickaxe == "1"){
  pickaxe1 = "<:StoneP2:720617209851805752>";
  pickaxe2 = "<:stoneP:720616972944932865>"; 
  text = "Stone Pickaxe";
  text2 = "Iron Pickaxe";
  price = 1500;  
  } 
    
  if(pickaxe == "2"){
  pickaxe1 = "<:ironP2:720617209797279777>";
  pickaxe2 = "<:ironP:720616972995526676>";
  text = "Iron Pickaxe";
  text2 = "Diamond Pickaxe";
  price = 3000;
  }  
    
  if(pickaxe == "3"){
  pickaxe1 = "<:pickaxeD2:720589176214519848>";
  pickaxe2 = "<:pickaxeD:720589176210325514>";
  text = "Diamond Pickaxe";   
  } 
  
   if(!args[1]){  
	   
   const embed = new Discord.MessageEmbed()
  .setTitle("<:pickaxeD:720589176210325514> | Your pickaxe")
  .setDescription(`\u200b\n${pickaxe2} You have a ${text}\n\u200b`)
  .setColor(0xC76CF5)
  .setFooter('Have a nice day!', process.env.BOT_AVATAR);
  return message.channel.send(embed); 
	   
  }
	  
  if(args[1] == "upgrade"){
  
    
   if(pickaxe >= 3){
   
    const embed = new Discord.MessageEmbed()
  .setTitle("<:pickaxeD:720589176210325514> | Pickaxe Store")
  .setDescription(`\u200b\n${pickaxe2} You can't upgrade your ${text} anymore!\n\u200b`)
  .setColor(0xC76CF5)
  return message.channel.send(embed);
     
   }
   
	  
  if(money > price){	  
   const embed = new Discord.MessageEmbed()
  .setTitle("<:pickaxeD:720589176210325514> | Pickaxe Store")
  .setDescription(`\u200b\n${pickaxe2} Do you want to upgrade your ${text} to a ${text2} for ${price}?\n` + "`Answer with <yes> or <no>`")
  .setColor(0xC76CF5)
  message.channel.send(embed) 
  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
  console.log(collector)
  collector.on('collect', m => {
	  
	if (m.content.toLowerCase() == "yes") { 
	       var totalxd = eval(pickaxe) + eval(1);
	       var totalm = eval(money) - eval(price);	
	       pool.query(`UPDATE usersxp SET money = ${totalm} WHERE id = '${message.author.id}'`, console.log);	
               pool.query(`UPDATE usersxp SET pickaxe = ${totalxd} WHERE id = '${message.author.id}'`, console.log);
               const embed = new Discord.MessageEmbed()
               .setDescription(`Pickaxe upgraded **Balance:** ${money} - ${price}`)
	        .setColor(0xC76CF5)  
	        m.channel.send(embed);
	  	collector.stop('Collector stopped manually');
     }else if (m.content.toLowerCase() == "no") {
	
  	 	const embed = new Discord.MessageEmbed()
                .setDescription(`<:pickaxeD:720589176210325514> | Offer Rejected`)
	        .setColor(0xC76CF5)
	        m.channel.send(embed);
		collector.stop('Collector stopped manually'); 
          
            } 
           });
 	
	  
	  collector.on('end', collected => {
	  if(collected.size === 0){
	  return message.reply("No one replied");
	  }		  
	  });	  
	  
  }else{
   
  const embed = new Discord.MessageEmbed()
  .setTitle("<:pickaxeD:720589176210325514> | Pickaxe Store")
  .setDescription(`\u200b\n${pickaxe2} You don't have enough money!**Required:** ${price}\n\u200b`)
  .setColor(0xC76CF5)
  message.channel.send(embed);
  
  }
	  
	  
   
    
    
  }    
    
     
     
  });
  }
  
  
    
}
}
