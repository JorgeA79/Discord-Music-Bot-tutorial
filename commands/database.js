const Discord = require("discord.js");
const pg = require('pg');

const pool = new pg.Pool({
	port: 5432,
        host: 'ec2-54-211-210-149.compute-1.amazonaws.com',
        database: 'dbi7a4i58mse1i',
        user: 'yuoiefmjewbrjt',
        password: '9bea5f1fa4e2b903889c29e14b98e19e7d5e6612980a22e84b56d881c2c1bf74',
});

pool.connect()

//pool.query("CREATE TABLE userxp (id INT, xp INT, lvl INT)", (err, res)=>{
// console.log(err,res)
//  pool.end()
// })

module.exports = {
  name: "xp",
  description: "Pinging the bot",
  execute(client, message) {

//pool.query('INSERT INTO userxp (id, xp, lvl) VALUES ($1, $2, $3)', [idx, xd, dx])

    let target = message.mentions.users.first() || message.author;
    
    pool.query(`SELECT * FROM usersxp WHERE id = '${target.id}'`,(err, result)=>{
    if(err) return err;
    if(!result.rows[0])  return message.channel.send("This user has no xp")
      
    let xp = result.rows[0].xp;
    message.channel.send(xp);
    }); 
    

}
}
