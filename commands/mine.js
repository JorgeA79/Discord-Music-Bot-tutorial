//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");
//Wooden animation
var anim1 = "<:woodenPix2:720518856480784435><:stone1:720518856350892119>";
var anim2 = "<:woodenPix1:720518856694824960><:stone2:720518856694693889>";
var anim3 = "<:woodenPix2:720518856480784435><:stone3:720518856707407942>";
var anim4 = "<:woodenPix1:720518856694824960><:coal:720523944548892732>";



module.exports = {
  name: "mine",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  if(!args[0]){
  //Minar
  const embedU = new Discord.MessageEmbed()
  .setDescription("<:woodenPix1:720518856694824960><:stone:720518856635973712>")
  .setColor(0xC76CF5);
  message.channel.send(embedU).then((sentMessage) => {
    setTimeout(function(){ 
      const embed = new Discord.MessageEmbed()
      .setDescription(`${anim1}`)
      .setColor(0xC76CF5);  
    sentMessage.edit(embed) 
    }, 1000);
    setTimeout(function(){ 
      const embed = new Discord.MessageEmbed()
      .setDescription(`${anim2}`)
      .setColor(0xC76CF5);  
      sentMessage.edit(embed)
    }, 2000);
    setTimeout(function(){ 
      const embed = new Discord.MessageEmbed()
      .setDescription(`${anim3}`)
      .setColor(0xC76CF5);  
    sentMessage.edit(embed)
    }, 3000);
   setTimeout(function(){ 
     const embed = new Discord.MessageEmbed()
      .setDescription(`${anim4}`)
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
