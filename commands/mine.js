//FIRST TEST HANDLER IS WORKING OR NOT
const Discord = require("discord.js");

module.exports = {
  name: "mine",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  if(!args[0]){
  //Minar
  
  message.channel.send("<:woodenPix1:720518856694824960><:stone:720518856635973712>").then((sentMessage) => {
    setTimeout(function(){ 
    sentMessage.edit("<:woodenPix2:720518856480784435><:stone1:720518856350892119>") 
    }, 3000);
    setTimeout(function(){ 
    sentMessage.edit("<:woodenPix1:720518856694824960><:stone2:720518856694693889>")
    }, 3000);
    setTimeout(function(){ 
    sentMessage.edit("<:woodenPix2:720518856480784435><:stone3:720518856707407942>")
    }, 3000);
   
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
