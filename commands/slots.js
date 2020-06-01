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
    points: 10,
    weight: 100
});    
const ultrab = new SlotSymbol('ultrab', {
    display: '<:ultrab:716936621529890869>',
    points: 10,
    weight: 100
});  
const premierb = new SlotSymbol('premierb', {
    display: '<:premierb:716936621592674365>',
    points: 10,
    weight: 100
});
const quickb = new SlotSymbol('quickb', {
    display: '<:quickb:716936621609582715>',
    points: 10,
    weight: 100
});
const timerb = new SlotSymbol('timerb', {
    display: '<:timerb:716936621680885760>',
    points: 10,
    weight: 100
});    
const loveb = new SlotSymbol('loveb', {
    display: '<:loveb:716936621118849034>',
    points: 10,
    weight: 100
});  
const luxuryb = new SlotSymbol('luxuryb', {
    display: '<:luxuryb:716936620753813586>',
    points: 10,
    weight: 100
});      
const masterb = new SlotSymbol('masterb', {
    display: '<:masterb:716936718825029723>',
    points: 100,
    weight: 50
});
 

 
const machine = new SlotMachine(3, [pokeb, greatb, ultrab, quickb, luxuryb, timerb, loveb, premierb, masterb]);
const results = machine.play();
const resultspoints = machine.play().totalPoints;
    
    
message.channel.send(resultspoints);        
message.channel.send(results.visualize());    
console.log(results.visualize());
    
}
}
