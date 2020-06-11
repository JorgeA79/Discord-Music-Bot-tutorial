//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
//Wooden animation

var pickaxe1 = "<:woodenPix1:720518856694824960>";
var pickaxe2 = "<:woodenPix2:720518856480784435>";
var pickaxe = 4;

var anim1 = `<:steve:720530349121208357>${pickaxe2}<:stone1:720518856350892119>`;
var anim2 = `<:steve:720530349121208357>${pickaxe1}<:stone2:720518856694693889>`;
var anim3 = `<:steve:720530349121208357>${pickaxe2}<:stone3:720518856707407942>`;
var anim4 = `<:steve:720530349121208357>${pickaxe1}`;

var minerals = [
"<:coal:720523944548892732>",
"<:iron_ingot:720528333879771197>",
"<:gold_ingot:720528333879640134>",
"<:diamond:720528333732839477>",
"<:emerald:720528333862993991>"
];

module.exports = {
  name: "mine",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  if(!args[0]){
  //Minar
    
  if(pickaxe == 4){
  pickaxe1 = "<:pickaxeD2:720589176214519848>"
  pickaxe2 = "<:pickaxeD:720589176210325514>"  
  }   
    
  var selectM = minerals[Math.floor(Math.random() * minerals.length)];
  var text ="";  
  if(selectM = minerals[0]) text = "Coal";
  if(selectM = minerals[1]) text = "Iron"; 
  if(selectM = minerals[2]) text = "Gold";
  if(selectM = minerals[3]) text = "Diamond"; 
  if(selectM = minerals[4]) text = "Emerald";
    
  const embedU = new Discord.MessageEmbed()
  .setTitle("<:lucky:720574567571128341> | Mining.\n\u200b")
  .setDescription(`<:steve:720530349121208357>${pickaxe1}<:stone:720518856635973712>\n\u200b`)
  .setFooter(`${message.author.username} is mining...`)
  .setColor(0xC76CF5);
  message.channel.send(embedU).then((sentMessage) => {
    setTimeout(function(){ 
      const embed = new Discord.MessageEmbed()
      .setTitle("<:lucky:720574567571128341> | Mining..\n\u200b")
      .setDescription(`${anim1}\n\u200b`)
      .setFooter(`${message.author.username} is mining...`)
      .setColor(0xC76CF5);  
    sentMessage.edit(embed) 
    }, 1000);
    setTimeout(function(){ 
      const embed = new Discord.MessageEmbed()
      .setTitle("<:lucky:720574567571128341> | Mining...\n\u200b")
      .setDescription(`${anim2}\n\u200b`)
      .setFooter(`${message.author.username} is mining...`)
      .setColor(0xC76CF5);  
      sentMessage.edit(embed)
    }, 2000);
    setTimeout(function(){ 
      const embed = new Discord.MessageEmbed()
      .setTitle("<:lucky:720574567571128341> | Mining.\n\u200b")
      .setDescription(`${anim3}\n\u200b`)
      .setFooter(`${message.author.username} is mining...`)
      .setColor(0xC76CF5);  
    sentMessage.edit(embed)
    }, 3000);
   setTimeout(function(){ 
     const embed = new Discord.MessageEmbed()
      .setTitle(`<:lucky:720574567571128341> | You got ${text}\n\u200b`)
      .setDescription(`${anim4}${selectM}\n\u200b`)
      .setFooter(`${message.author.username} mined some ${text}`)
      .setColor(0xC76CF5);  
    sentMessage.edit(embed)
    }, 4000);
  })
  
  }
  if(args[0]== "inv" ||args[0] == "inventory"){
  //Inventario de minerales
  }
  if(args[0]== "sell"){
  //Vender minerales
  }
  if(args[0] == "help"){
  //Menu de ayuda
  }
  if(args[0] == "pickaxe"){
  //Menu y mejoras del pico
  }
  
  
    
}
}
