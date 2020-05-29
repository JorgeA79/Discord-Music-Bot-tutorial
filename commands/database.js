const Discord = require("discord.js");
const pg = require('pg')


//pool.query("CREATE TABLE userxp (id INT, xp INT, lvl INT)", (err, res)=>{
// console.log(err,res)
//  pool.end()
// })


const pool = new pg.Pool({
  user: 'rzzdnmvcvbukfk',
  host: 'ec2-34-198-243-120.compute-1.amazonaws.com',
  database: 'd8109afqb7n9hf',
  password: '61a0b3cb10dace308474cb1da5a50cbb78642e040627827ec3cd3a73ea4fd493',
  port: 5432,
})


pool.connect()

function generateXp(){
let min = 10;
let max = 30;  
return Math.floor(Math.random()*(max - min+1)) + 10;
}

module.exports = {
  name: "owo",
  description: "Pinging the bot",
  execute(client, message) {

//pool.query('INSERT INTO userxp (id, xp, lvl) VALUES ($1, $2, $3)', [idx, xd, dx])
 

   let target = message.mentions.users.first() || message.author;
    
    pool.query(`SELECT * FROM usersxp WHERE id = '${target.id}'`,(err, result)=>{
    if(err) throw err;
    if(!result.rows[0])  return message.channel.send("This user has no xp")
      
    let xp = result.rows[0].xp;
    message.channel.send(xp);
    }); 
    

}
}
