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


module.exports = {
  name: "owo",
  description: "Pinging the bot",
  execute(client, message) {
var xd = 24;
var dx = 5;
var idx = message.author.id;
    
//pool.query('INSERT INTO userxp (id, xp, lvl) VALUES ($1, $2, $3)', [idx, xd, dx])

    
pool.query(`SELECT * FROM userxp WHERE id = '${message.author.id}'`,(err, result) => {
const curlvl = Math.floor(0.1 * Math.sqrt(result.rows.xp + 0.1));
const xpgen = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

if(err) return err;

  
let sql;
if (!result.rows[0]){
    sql = `INSERT INTO userxp(idx, xp, level) VALUES('${message.author.id}', 0, 0)`
} else {
    let xp = result.rows.xp;
    sql = `UPDATE userxp SET xp = ${xp + xpgen} WHERE userid = '${message.author.id}'`
}
                     
 pool.query(sql, console.log);
pool.end(err => {
  if(err) throw err; 
  console.log('Not logged to PostgresSQL');
});
                     
});
    
  
}
}
