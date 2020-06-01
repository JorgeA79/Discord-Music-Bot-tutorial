const Discord = require("discord.js");
const { SlotMachine, SlotSymbol } = require('slot-machine');

module.exports = {
  name: "slots",
  description: "Pinging the bot",
  execute(client, message) {

const cherry = new SlotSymbol('cherry', {
    display: '🍒',
    points: 10,
    weight: 100
});
 
const money = new SlotSymbol('money', {
    display: '💰',
    points: 100,
    weight: 50
});
 
const wild = new SlotSymbol('wild', {
    display: '❔',
    points: 10,
    weight: 50,
    wildcard: true
});
    
const xd = new SlotSymbol('xd', {
    display: '<:wait:694792686783168524>',
    points: 30,
    weight: 100,
    wildcard: true
});    
 
const machine = new SlotMachine(3, [cherry, money, wild, xd]);
const results = machine.play();

message.channel.send(results.visualize());    
console.log(results.visualize());
    
}
}
