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
  name: "profile",
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
	let lvl = result.rows[0].lvl;	
	let money = result.rows[0].money;
	if (money === null) money =0;		
	if (lvl === null) lvl =0;
		
	const canvas = Canvasx.createCanvas(500, 500);
	const ctx = canvas.getContext('2d');
	
	const rect = await Canvasx.loadImage('./images/RECTBOX.png');		
	
	const background = await Canvasx.loadImage('./images/PFCard.png');
	const boxes = await Canvasx.loadImage('./images/Box.png');
	const bg = await Canvasx.loadImage('./images/BGDEF.png');
	const bg1 = await Canvasx.loadImage('./images/BGP.png');
	const bg2 = await Canvasx.loadImage('./images/BGAMMY.png');	
	const bg3 = await Canvasx.loadImage('./images/BGPIX.png');
	if(target.id == "304357538101723137"){
	ctx.drawImage(bg1, 0, 0, canvas.width, canvas.height);
	}else if(target.id == "206606985167110145"){
	ctx.drawImage(bg2, 0, 0, canvas.width, canvas.height);	 
	}else if(target.id == "370483123848478721"){
	ctx.drawImage(bg3, 0, 0, canvas.width, canvas.height);	 
	}else{
	ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);	 
	}
		
		
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#121010';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
        
	ctx.font = '35px Bebas';
	ctx.fillStyle = '#ffffff';
	if(xp > 1000){ 
	ctx.textAlign = "center";
	xp = eval(xp) / eval(1000);
	ctx.fillText(`${~~xp}K`, 435, 425);		
	}else{
	ctx.textAlign = "center";
	ctx.fillText(`${~~xp}`, 435, 425);	
	}	
		
	//ctx.fillText(`XP: ${xp}`, canvas.width / 1.7, canvas.height / 1.8);
	if(money > 1000){ 
	ctx.textAlign = "center";
	money = eval(money) / eval(1000);
	ctx.fillText(`${~~money}K`, 65, 425);		
	}else{
	ctx.textAlign = "center";
	ctx.fillText(`${money}`, 65, 425);	
	}	
	ctx.fillText(`${lvl}`, 250,425);	
	var name = normalizeText.normalizeText(target.username)
	ctx.font = applyText(canvas, `${name}!`);
	ctx.drawImage(rect, 125, 240, 250, 80);	
		
	ctx.fillStyle = '#ffffff';
	ctx.textAlign = "center";	
	ctx.fillText(`${name}!`, 250, canvas.height / 1.71);
       
	
		
	ctx.beginPath();
	ctx.arc(250, 185, 75, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();
		
	const avatar = await Canvasx.loadImage(target.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 175,110 , 150, 150);


		
	
		
		
	const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
	message.channel.send(`:round_pushpin:  |  Profile card of ${target.username}`, attachment);	
		
		}); 	  	
 
 
    
}
}

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 45;
	do {

	ctx.font = `${fontSize -= 10}px Bebas`;
	} while (ctx.measureText(text).width > canvas.width - 270);
	return ctx.font;
};
	 
