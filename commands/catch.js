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
   message.channel.send(`You got a ${get(pokemon)} pokemon`);   
  //You can catch
  }else{
  //You cant catch
   message.channel.send("UwU");   
  } 
  }
  if(args[0] == "inv" || args[0] == "inventory"){
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`**Common:** ${ctW}\n**Normal:** ${ctN}\n**Epic:** ${ctE}\n**Legendary:** ${ctL}`)
  .setColor(0xC76CF5);
  message.channel.send(embed);
  }  
  });
  
             }
             }
