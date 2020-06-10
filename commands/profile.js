const discord = require("discord.js");
const Canvasx = require('canvas');
const { join } = require('path');
const { registerFont } = require('canvas');
registerFont('./fonts/Bebas.ttf', { family: 'Bebas' })
var normalizeText = require("normalize-text")

const pg = require('pg')
const pool = new pg.Pool({
	connectionString : process.env.DATABASE_URL,
});
pool.connect()

module.exports = {
  name: "xdxd",
  description: "Pinging the bot",
  execute(client, message) {
 
 var bgx = [
	'./images/Bg1.png',
	'./images/Bg2.png',
	'./images/Bg3.png',
	'./images/Bg4.png',
	'./images/Bg5.png'	
	]	  
	var bg = bgx[Math.floor(Math.random() * bgx.length)];
		
	let target = message.mentions.users.first() || message.author;
    
    	pool.query(`SELECT * FROM usersxp WHERE id = '${target.id}'`,async (err, result)=>{
    	if(err) return err;
    	if(!result.rows[0])  return message.channel.send("Cannot show user's profile")
      
  let xp = result.rows[0].xp;
	let money = result.rows[0].money;
	if (money === null) money =0;		
			
	const canvas = Canvasx.createCanvas(500, 500);
	const ctx = canvas.getContext('2d');

	const background = await Canvasx.loadImage('./images/PFCard.png');
	const boxes = await Canvasx.loadImage('./images/Box.png');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#121010';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
	ctx.font = '28px Bebas';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`XP: ${xp}`, canvas.width / 1.7, canvas.height / 1.8);
	ctx.fillText(`Balance: $${money}`, canvas.width / 1.7, canvas.height / 1.25);	
	var name = normalizeText.normalizeText(target.username)
	const namexd = console.log(name);
	ctx.font = applyText(canvas, `${namexd}!`);
	
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${target.username.normalize("NFC")}!`, canvas.width / 2.5, canvas.height / 3.5);

	ctx.arc(245, 185, 75, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();
		
	const avatar = await Canvasx.loadImage(target.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 170,110 , 150, 150);
	ctx.shadowColor = '#898';
 	ctx.shadowBlur = 20;
 	ctx.shadowOffsetX = 20;
 	ctx.shadowOffsetY = 20;		
	const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
	message.channel.send(`:round_pushpin:  |  Profile card of ${target.username}`, attachment);	
		
		}); 	  	
 
 
    
}
}

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;
	do {

	ctx.font = `${fontSize -= 10}px Bebas`;
	} while (ctx.measureText(text).width > canvas.width - 300);
	return ctx.font;
};
	 
