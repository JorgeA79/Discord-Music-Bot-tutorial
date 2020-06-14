const Discord = require("discord.js");
const fetch = require("node-fetch");
const apikey = process.env.LOL_API;


module.exports = {
  name: "lol",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  const argsx = args.join(" ").split(' , ');
  
  if(!argsx[0]) return message.channel.send("You need to specify a region");
  if(!argsx[1]) return message.channel.send("You need to specify a username");
  
  const api = `?api_key=${apikey}`;
  const protocol = "https://";
  const regions = {
   br: "br1.api.riotgames.com",
   eun: "eun1.api.riotgames.com",
   euw: "euw1.api.riotgames.com",
   jp: "jp1.api.riotgames.com",
   kr: "kr.api.riotgames.com",
   lan: "la1.api.riotgames.com",
   las: "la2.api.riotgames.com",
   na: "na1.api.riotgames.com",
   oce: "oc1.api.riotgames.com",
   tr: "tr1.api.riotgames.com",
   ru: "ru.api.riotgames.com"
   }
   const region = regions[argsx[0].toLowerCase()];
   var name = argsx[1];
   name = name.replace(/\s+/g, '%20').toLowerCase();
   const site = `${protocol}${region}/lol/summoner/v4/summoners/by-name/${name}${api}`; 

    
  fetch(site)
  .then(res => res.json()).then(body => {
   
   fetch("http://ddragon.leagueoflegends.com/cdn/10.9.1/data/en_US/champion.json") 
   .then(res => res.json()).then(bodyR => { 
     
   for (var i = 0; i < bodyR.length; i++){
      // look for the entry with a matching `code` value
      if (bodyR[i].key == "51"){  
      message.channel.send(bodyR[i].id);
      }
    }
     
   })
    
   const site2 = `${protocol}${region}/lol/league/v4/entries/by-summoner/${body.id}${api}` 
   fetch(site2)
   .then(res => res.json()).then(bodyR => {
    
   var tierM = "";  
   var tierR = ""; 
   var tierX = ""; 
   var winR = 0;
   var stats = ""; 
   var rank = "";  
        
   if(bodyR.length < 1){
     tierX = "Unranked";
     stats = "";    
   }else if(bodyR.length == 1){
    rank = bodyR[0].rank.toString(); 
    tierM = bodyR[0].tier.toString().charAt(0).toUpperCase();  
    tierR = bodyR[0].tier.toString().slice(1).toLowerCase(); 
    tierX = tierM + tierR + " " + rank ; 
    winR = (eval(bodyR[0].wins) / (eval(bodyR[0].wins) + eval(bodyR[0].losses))* eval(100)) 
    stats = `\n**${bodyR[0].leaguePoints}LP** / ${bodyR[0].wins}W ${bodyR[0].losses}L\nWinrate: ${~~winR}%`;
   }else{       
    rank = bodyR[1].rank.toString(); 
    tierM = bodyR[1].tier.toString().charAt(0).toUpperCase();  
    tierR = bodyR[1].tier.toString().slice(1).toLowerCase(); 
    tierX = tierM + tierR + " " + rank ; 
    winR = (eval(bodyR[1].wins) / (eval(bodyR[1].wins) + eval(bodyR[1].losses))* eval(100)) 
    stats = `\n**${bodyR[1].leaguePoints}LP** / ${bodyR[1].wins}W ${bodyR[1].losses}L\nWinrate: ${~~winR}%`;   
   }   
    
     
     
    
     
    //Send Profile 
    const embed = new Discord.MessageEmbed()

    .setColor(0xC76CF5)
    .setTitle("Profile: " + body.name)
    .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${body.profileIconId}.png`)
    .setDescription(`Here you go, ${body.name}!`)
    .addField('Level', `${body.summonerLevel}`, true)
    .addField('Rank', `**${tierX}**${stats}`, true)
    .setFooter("Have a nice day!", process.env.BOT_AVATAR)
    .setTimestamp()  
    message.channel.send(embed)
    }) 
  })     
   
   
}
}
