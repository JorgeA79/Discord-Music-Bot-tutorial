const Discord = require("discord.js");
const { SlotMachine, SlotSymbol } = require('slot-machine');

module.exports = {
  name: "slots",
  description: "Pinging the bot",
  execute(client, message) {

const pokeb = new SlotSymbol('pokeb', {
    display: '<:pokeb:716936621265518613>',
    points: 10,
    weight: 100
});
const greatb = new SlotSymbol('greatb', {
    display: '<:greatb:716936621022248970>',
    points: 15,
    weight: 80
});    
const ultrab = new SlotSymbol('ultrab', {
    display: '<:ultrab:716936621529890869>',
    points: 20,
    weight: 70
});  
const premierb = new SlotSymbol('premierb', {
    display: '<:premierb:716936621592674365>',
    points: 25,
    weight: 65
});
const quickb = new SlotSymbol('quickb', {
    display: '<:quickb:716936621609582715>',
    points: 25,
    weight: 60
});
const timerb = new SlotSymbol('timerb', {
    display: '<:timerb:716936621680885760>',
    points: 25,
    weight: 60
});    
const loveb = new SlotSymbol('loveb', {
    display: '<:loveb:716936621118849034>',
    points: 30,
    weight: 55
});  
const luxuryb = new SlotSymbol('luxuryb', {
    display: '<:luxuryb:716936620753813586>',
    points: 35,
    weight: 45
});      
const masterb = new SlotSymbol('masterb', {
    display: '<:masterb:716936718825029723>',
    points: 100,
    weight: 40
});
 

 
const machine = new SlotMachine(3, [pokeb, greatb, ultrab, quickb, luxuryb, timerb, loveb, premierb, masterb]);
const results = machine.play();
const resultspoints = machine.play().totalPoints;
    
    
     const embed = new Discord.MessageEmbed()
      .setDescription(results.visualize())
	    .setColor(0xC76CF5)
	    message.channel.send(embed);	
    
    
message.channel.send(resultspoints);        
message.channel.send(results.visualize());    

    
}
}
