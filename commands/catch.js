const Discord = require("discord.js");
const pg = require('pg');

const pool = new pg.Pool({
connectionString : process.env.DATABASE_URL,
});
pool.connect()

var pokemon = {
    common:55, // Weighted Probability
    normal:30, // Weighted Probability
    epic:14, // Weighted Probability
    legendary:1
};

function get(input) {
    var array = []; // Just Checking...
    for(var item in input) {
        if ( input.hasOwnProperty(item) ) { // Safety
            for( var i=0; i<input[item]; i++ ) {
                array.push(item);
            }
        }
    }
    // Probability Fun
    return array[Math.floor(Math.random() * array.length)];
}

module.exports = {
  name: "catch",
  description: "Pinging the bot",
  execute(client, message, args) {
 
  pool.query(`SELECT * FROM usersxp WHERE id = '${message.author.id}'`,(err, result)=>{
  if(err) return err;  
  let money = result.rows[0].money;
  var total =0;	    
  let ctW = result.rows[0].ctw;
  let ctN = result.rows[0].ctn;
  let ctE = result.rows[0].cte;
  let ctL = result.rows[0].ctl;
    
  if(money === null) money=0;  
  if(ctW === null) ctW=0;
  if(ctN === null) ctN=0; 
  if(ctE === null) ctE=0; 
  if(ctL === null) ctL=0; 
  //Variables  
    
    
  if(!args[0]){
  //Catch
  if(money > 10){
        
  const pokemonxd = get(pokemon);
  var description = "";
  var xd = 0;
  let sql; 
      
  if(pokemonxd == "common"){ 
      description = "You got a common pokemon <a:joltik:719732119844159532>";
      xd = eval(ctW) + eval(1)
      pool.query(`UPDATE usersxp SET ctw = ${xd} WHERE id = '${message.author.id}'`, console.log)

  }
  if(pokemonxd == "normal"){ 
      description = "You got a normal pokemon <a:zorua:719732121689784340>";
      xd = eval(ctN) + eval(1)
     pool.query(`UPDATE usersxp SET ctn = ${xd} WHERE id = '${message.author.id}'`, console.log)
  }
  if(pokemonxd == "epic"){
      description = "You got an epic pokemon <a:tyranitar:719732120939003966>";
      xd = eval(ctE) + eval(1)
      pool.query(`UPDATE usersxp SET cte = ${xd} WHERE id = '${message.author.id}'`, console.log)
  }
  if(pokemonxd == "legendary"){ 
      description = "You got a legendary pokemon <a:Mew:719732117818572967>";
      xd = eval(ctL) + eval(1)
     pool.query(`UPDATE usersxp SET ctl = ${xd} WHERE id = '${message.author.id}'`, console.log);
  }  
 
  const embed = new Discord.MessageEmbed()    
  .setTitle(`<:pokeb:716936621265518613>  |  Pokemon Catcher`)
  .setDescription(description)
  .setColor(0xC76CF5)    
  message.channel.send(embed);  
  total = eval(money) - eval(10);
  pool.query(`UPDATE usersxp SET money = ${total} WHERE id = '${message.author.id}'`, console.log);
   
      
  //You can catch
  }else{
  //You cant catch
   message.channel.send("UwU");   
  } 
  }else{
  if(args[0].toLowerCase() == "inv" || args[0].toLowerCase() == "inventory"){
  
  const embed = new Discord.MessageEmbed()
  .setTitle("<:pokeb:716936621265518613> | Pokemon Catch Inventory")
  .setDescription(`<a:joltik:719732119844159532>**Common:** ${ctW}\n<a:zorua:719732121689784340>**Normal:** ${ctN}\n<a:tyranitar:719732120939003966>**Epic:** ${ctE}\n<a:Mew:719732117818572967>**Legendary:** ${ctL}\n\u200b`)
  .setColor(0xC76CF5)
  .setFooter('Have a nice day!', process.env.BOT_AVATAR);
  message.channel.send(embed);
  } else if(args[0] == "help"){
  
   const embed = new Discord.MessageEmbed()
    .setTitle("<:masterb:716936718825029723> | Catching Commands")
    .setDescription(`This are all the commmands related to the Pokemon Catching minigame!, ${message.author}\n\u200b`)
    .addField("p!catch:", `<:pokeb:716936621265518613> Catch one random pokemon.`, false)
    .setImage('https://i.imgur.com/bPt58n7.png')
    .addField("p!catch inv || p!catch inventory:", `<:pokeb:716936621265518613> Get your inventory of pokemon classes.`, false)
    .addField("p!catch sell <item-name>", `<:pokeb:716936621265518613> Sell your pokemon.`, false)
    .setColor(0xC76CF5);
    return message.channel.send(embed);	 
  
  }else if(args[0] == "sell") {
  
  if(!args[1]){
  const embed = new Discord.MessageEmbed()
  .setDescription("Please specify what you want to sell: \n`p!catch sell <item>`\n -Common | <a:joltik:719732119844159532>\n -Normal | <a:zorua:719732121689784340>\n -Epic | <a:tyranitar:719732120939003966>\n -Legendary | <a:Mew:719732117818572967>")
  .setColor(0xC76CF5)
  message.channel.send(embed);
  
  }else if(args[1].toLowerCase() =="common"){
  
  const embed = new Discord.MessageEmbed()
  .setTitle("<:pokeb:716936621265518613> | Pokemon Bank")
  .setDescription(`Succesfully sold ${ctW} **Common Pokemon** <a:joltik:719732119844159532>`)
  .setColor(0xC76CF5)
  message.channel.send(embed);
      
   total = eval(money) + (eval(ctW)*eval(8));
  pool.query(`UPDATE usersxp SET money = ${total} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET ctw = 0 WHERE id = '${message.author.id}'`, console.log);
      
      
  }else if(args[1].toLowerCase() =="normal"){
  
   const embed = new Discord.MessageEmbed()
  .setTitle("<:pokeb:716936621265518613> | Pokemon Bank")
  .setDescription(`Succesfully sold ${ctN} **Normal Pokemon** <a:zorua:719732121689784340>`)
  .setColor(0xC76CF5)
  message.channel.send(embed); 
      
      total = eval(money) + (eval(ctN)*eval(20));
  pool.query(`UPDATE usersxp SET money = ${total} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET ctn = 0 WHERE id = '${message.author.id}'`, console.log);
      
      
  }else if(args[1].toLowerCase() =="epic"){
 
       const embed = new Discord.MessageEmbed()
  .setTitle("<:pokeb:716936621265518613> | Pokemon Bank")
  .setDescription(`Succesfully sold ${ctE} **Epic Pokemon** <a:tyranitar:719732120939003966>`)
  .setColor(0xC76CF5)
  message.channel.send(embed);
      
      total = eval(money) + (eval(ctE)*eval(100));
  pool.query(`UPDATE usersxp SET money = ${total} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET cte = 0 WHERE id = '${message.author.id}'`, console.log);
      
      
  }else if(args[1].toLowerCase() =="legendary"){
      
        const embed = new Discord.MessageEmbed()
  .setTitle("<:pokeb:716936621265518613> | Pokemon Bank")
  .setDescription(`Succesfully sold ${ctL} **Legendary Pokemon** <a:Mew:719732117818572967>`)
  .setColor(0xC76CF5)
  message.channel.send(embed);
      
  total = eval(money) + (eval(ctL)*eval(500));
  pool.query(`UPDATE usersxp SET money = ${total} WHERE id = '${message.author.id}'`, console.log);
  pool.query(`UPDATE usersxp SET ctl = 0 WHERE id = '${message.author.id}'`, console.log);
      
      
  }
      
  }
  }
  });
  
             }
             }
