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
      if(coal === null) coal=0;
      if(iron === null) iron=0; 
      if(gold === null) gold=0; 
      if(diamond === null) diamond=0;
      if(emerald === null) emerald=0;      
      var xd = 0;
      let testValues = [{
      value : 'Coal',
      probability: 0.5
      },
      {
      value : 'Iron',
      probability: 0.2
      },
      {
      value : 'Gold',
      probability: 0.2
      },
      {
      value : 'Diamond',
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
      probability: 0.5
      },
      {
      value : 'Iron',
      probability: 0.5
      }]
  } 
    
  if(pickaxe == "2"){
  pickaxe1 = "<:ironP2:720617209797279777>";
  pickaxe2 = "<:ironP:720616972995526676>";
  mineralsx = [":coal:720523944548892732",":iron_ingot:720528333879771197", ":gold_ingot:720528333879640134",":diamond:720528333732839477","<:emerald:720528333862993991>"]; 
    
    testValues = [{
      value : 'Coal',
      probability: 0.2
      },
      {
      value : 'Iron',
      probability: 0.5
      },
      {
      value : 'Gold',
      probability: 0.2
      },
      {
      value : 'Diamond',
      probability: 0.1
      }]
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
      probability: 0.4
      },
      {
      value : 'Gold',
      probability: 0.2
      },
      {
      value : 'Diamond',
      probability: 0.3
      }]
  }   
   
  var anim1 = `<:steve:720530349121208357>${pickaxe2}<:stone1:720518856350892119>`;
  var anim2 = `<:steve:720530349121208357>${pickaxe1}<:stone2:720518856694693889>`;
  var anim3 = `<:steve:720530349121208357>${pickaxe2}<:stone3:720518856707407942>`;
  var anim4 = `<:steve:720530349121208357>${pickaxe1}`;
   
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
        pool.query(`UPDATE usersxp SET coal = ${xd} WHERE id = '${message.author.id}'`, console.log)
      }
      if(textx == "Gold"){ 
        emote = ":gold_ingot:720528333879640134";
        xd = eval(gold) + eval(1)
        pool.query(`UPDATE usersxp SET coal = ${xd} WHERE id = '${message.author.id}'`, console.log)
      }
      if(textx == "Diamond"){ 
        emote = ":diamond:720528333732839477";
        xd = eval(diamond) + eval(1)
        pool.query(`UPDATE usersxp SET coal = ${xd} WHERE id = '${message.author.id}'`, console.log)
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
    
    
  const embed = new Discord.MessageEmbed()
  .setTitle("<:pickaxeD:720589176210325514> | Mining Inventory")
  .setDescription(`<:coal:720523944548892732>**Coal:** ${coal}\n<:iron_ingot:720528333879771197>**Iron:** ${iron}\n<:gold_ingot:720528333879640134>**Gold:** ${gold}\n<:diamond:720528333732839477>**Diamond:** ${diamond}\n\u200b`)
  .setColor(0xC76CF5)
  .setFooter('Have a nice day!', process.env.BOT_AVATAR);
  message.channel.send(embed);  
    
  });  
  }
    
  if(args[0]== "sell"){
  //Vender minerales
  }
  if(args[0] == "help"){
  //Menu de ayuda
  }
  if(args[0] == "pickaxe"){
  //Menu y mejoras del pico
    
    
    
  pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`,(err, result)=>{ 
    

  let pickaxe = result.rows[0].pickaxe;
  var text = "";  
  var text2 = "";
  if(pickaxe === null) pickaxe = 0;  
  if(pickaxe == "0"){
  pickaxe1 = "<:woodenPix1:720518856694824960>";
  pickaxe2 = "<:woodenPix2:720518856480784435>";
  text = "Wooden Pickaxe";
  text2 = "Stone Pickaxe";    
  } 
  
  if(pickaxe == "1"){
  pickaxe1 = "<:StoneP2:720617209851805752>";
  pickaxe2 = "<:stoneP:720616972944932865>"; 
  text = "Stone Pickaxe";
  text2 = "Iron Pickaxe";   
  } 
    
  if(pickaxe == "2"){
  pickaxe1 = "<:ironP2:720617209797279777>";
  pickaxe2 = "<:ironP:720616972995526676>";
  text = "Iron Pickaxe";
  text2 = "Diamond Pickaxe";   
  }  
    
  if(pickaxe == "3"){
  pickaxe1 = "<:pickaxeD2:720589176214519848>";
  pickaxe2 = "<:pickaxeD:720589176210325514>";
  text = "Diamond Pickaxe";   
  } 
    
  if(args[1] == "upgrade"){
  
    
   if(pickaxe >= 3){
   
    const embed = new Discord.MessageEmbed()
  .setTitle("<:pickaxeD:720589176210325514> | Pickaxe Store")
  .setDescription(`\u200b\n${pickaxe2} You can't upgrade your ${text} anymore!\n\u200b`)
  .setColor(0xC76CF5)
  message.channel.send(embed);
     
   }
    
   const embed = new Discord.MessageEmbed()
  .setTitle("<:pickaxeD:720589176210325514> | Pickaxe Store")
  .setDescription(`\u200b\n${pickaxe2} Do you want to upgrade your ${text} to a ${text2}?\n` + "`Answer with <yes> or <no>`")
  .setColor(0xC76CF5)
  return message.channel.send(embed);    
     
  
  }    
    
    
   const embed = new Discord.MessageEmbed()
  .setTitle("<:pickaxeD:720589176210325514> | Your pickaxe")
  .setDescription(`\u200b\n${pickaxe2} You have a ${text}\n\u200b`)
  .setColor(0xC76CF5)
  .setFooter('Have a nice day!', process.env.BOT_AVATAR);
  message.channel.send(embed);    
     
  });
  }
  
  
    
}
}
