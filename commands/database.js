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

    pool.query(`SELECT * FROM userxp WHERE id = '${message.authoer.id}'`, (err,rows) =>{
    if(err) throw err;
    let sql;  
    if(rows.length < 1){
    sql = `INSERT INTO userxp (id,xp) VALUES ('${message.author.id}', ${generateXp()})`
    } else {
     let xp = rows[0].xp;
     sql = `UPDATE userxp SET xp = ${xp + generateXp()} WHERE id = '${message.guild.id}'`;
     
      
    }  
     pool.query(sql, console.log);
    });

}
}
