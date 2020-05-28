const Discord = require("discord.js");
const pg = require('pg')

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
  
    
   const text = 'INSERT INTO xp(id, xp) VALUES($1, $2) RETURNING *'
  const values = ['Jorge', '40']
 
    
    pool.query(text, values, (err, res) => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log(res.rows[0])
    // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
  }
})
}
}
