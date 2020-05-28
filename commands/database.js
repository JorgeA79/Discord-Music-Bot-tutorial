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
  
const idx = message.author.id;
const query = `
INSERT INTO userxp (id, xp, lvl)
VALUES ('+idx+', 30, 1)
`;
    
pool.query("CREATE TABLE userxp (id BIGINT, xp INT, lvl INT)", (err, res)=>{
 console.log(err,res)
 pool.end()
})
  
}
}
