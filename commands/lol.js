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
    
   const site2 = `${protocol}${region}/lol/league/v4/entries/by-summoner/${body.id}${api}` 
   
   fetch(site2)
   .then(res => res.json()).then(bodyR => {
    
   var tierM = bodyR[1].tier.toString().charAt(0).toUpperCase();  
   var tierR = bodyR[1].tier.toString().slice(1); 
   var tierX = tierM + tierR; 
    
  const embed = new Discord.MessageEmbed()

    .setColor(0xC76CF5)
    .setTitle("Profile: " + body.name)
    .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/10.9.1/img/profileicon/${body.profileIconId}.png`)
    .setDescription(`Here you go, ${body.name}!`)
    .addField('Level', `${body.summonerLevel}`, true)
    .addField('Rank', `**${tierX} ${bodyR[1].rank}**\n**${bodyR.leaguePoints}LP** / ${bodyR.wins}W ${bodyR.losses}L`, true)
    .setFooter("Have a nice day!", process.env.BOT_AVATAR)
    .setTimestamp()  
    message.channel.send(embed)
    }) 
  })     
   
   
}
}
