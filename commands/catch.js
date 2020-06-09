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
  let ctW = result.rows[0].ctW;
  let ctN = result.rows[0].ctN;
  let ctE = result.rows[0].ctE;
  let ctL = result.rows[0].ctL;
    
  if(money == null) money=0;  
  if(ctW == null) ctW=0;
  if(ctN == null) ctN=0; 
  if(ctE == null) ctE=0; 
  if(ctL == null) ctL=0; 
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
      sql = `UPDATE usersxp SET ctW = ${xd} WHERE id = '${message.author.id}'`

  }
  if(pokemonxd == "normal"){ 
      description = "You got a normal pokemon <a:zorua:719732121689784340>";
      xd = eval(ctN) + eval(1)
     sql = `UPDATE usersxp SET ctN = ${xd} WHERE id = '${message.author.id}'`
  }
  if(pokemonxd == "epic"){
      description = "You got an epic pokemon <a:tyranitar:719732120939003966>";
      xd = eval(ctE) + eval(1)
      sql =`UPDATE usersxp SET ctE = ${xd} WHERE id = '${message.author.id}'`
  }
  if(pokemonxd == "legendary"){ 
      description = "You got a legendary pokemon <a:Mew:719732117818572967>";
      xd = eval(ctL) + eval(1)
      sql = `UPDATE usersxp SET ctL = ${xd} WHERE id = '${message.author.id}'`
  }  
 
  const embed = new Discord.MessageEmbed()    
  .setTitle(`<:pokeb:716936621265518613>  |  Pokemon Catcher`)
  .setDescription(description)
  .setColor(0xC76CF5)    
  message.channel.send(embed);  
  total = eval(money) - eval(10);
  pool.query(`UPDATE usersxp SET money = ${total} WHERE id = '${message.author.id}'`, console.log);
  pool.query(sql, console.log);   
      
  //You can catch
  }else{
  //You cant catch
   message.channel.send("UwU");   
  } 
  }
  if(args[0] == "inv" || args[0] == "inventory"){
  
  const embed = new Discord.MessageEmbed()
  .setTitle("Pokemon Catch Inventory")
  .setDescription(`<a:joltik:719732119844159532>**Common:** ${ctW}\n<a:zorua:719732121689784340>**Normal:** ${ctN}\n<a:tyranitar:719732120939003966>**Epic:** ${ctE}\n<a:Mew:719732117818572967>**Legendary:** ${ctL}\n\u200b`)
  .setColor(0xC76CF5)
  .setFooter('Have a nice day!', process.env.BOT_AVATAR);
  message.channel.send(embed);
  }  
  });
  
             }
             }
