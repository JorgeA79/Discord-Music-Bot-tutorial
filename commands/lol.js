const Discord = require("discord.js");
const fetch = require("node-fetch");
const apikey = process.env.LOL_API;
var request = require('request');
const normalizeUrl = require('normalize-url');

const tiers = {
   IRON: "<:IRON:721790435319611463>",
   BRONZE: "<:BRONZE:721790433373454367>",
   SILVER: "<:SILVER:721790432752959589>",
   GOLD: "<:GOLD:721790435567337519>",
   PLATINUM: "<:PLATINUM:721790435705618582>",
   DIAMOND: "<:DIAMOND:721671835560706128>",
   MASTER: "<:MASTER:721790435529457767>",
   GRANDMASTER: "<:GRANDMASTER:721790435802087434>",
   CHALLENGER: "<:CHALLENGER:721790435596566568>"
   }
const champs = {
   Ahri: "<:AhriSquare:721850183314440284>",
   Caitlyn: "<:CaitlynSquare:721850192520937582>",
   Pyke:"<:PykeSquare:721853178076725349> "
   }

module.exports = {
  name: "lol",
  description: "Pinging the bot",
  execute(client, message, args) {
  const argsx = args.join(" ").split(' , ');
  
  if(!args[0]) return message.channel.send("You need to specify a region");
  if(!args[1]) return message.channel.send("You need to specify a username");  
  const argsowo = args.splice(1).join(" ");  
     
   //Site Variables 
   const api = `?api_key=${apikey}`;
   const protocol = "https://";
   const regions = {
   BR: "br1.api.riotgames.com",
   EUN: "eun1.api.riotgames.com",
   EUW: "euw1.api.riotgames.com",
   JP: "jp1.api.riotgames.com",
   KR: "kr.api.riotgames.com",
   LAN: "la1.api.riotgames.com",
   LAS: "la2.api.riotgames.com",
   NA: "na1.api.riotgames.com",
   OCE: "oc1.api.riotgames.com",
   TR: "tr1.api.riotgames.com",
   RU: "ru.api.riotgames.com"
   }
   const region = regions[args[0].toUpperCase()];
   var name = argsowo;
   name = name.replace(/\s+/g, '%20').toString();
   const site = `${protocol}${region}/lol/summoner/v4/summoners/by-name/${name}${api}`; 
   

  fetch(normalizeUrl(site))
  .then(res => res.json()).then(body => {
 
   var champT1 = "";
   var champT2 = ""; 
   var champT3 = "";  
    
   //Ranked Stats
   const site2 = `${protocol}${region}/lol/league/v4/entries/by-summoner/${body.id}${api}` 
   fetch(site2)
   .then(res => res.json()).then(bodyR => {
   console.log(site2) 
   var tierM = "";  
   var tierR = ""; 
   var tierX = ""; 
   var winR = 0;
   var stats = ""; 
   var rank = "";  
   var emoteR = "";
   var q ="";   
   var qU = {
   RANKED_FLEX_SR:"Flex",
   RANKED_SOLO_5x5:"Solo/Duo",
   UNRANKED:""
   }  
   if(bodyR.length < 1){
     emoteR = "";
     tierX = "Unranked";
     stats = "";   
     var UNRANKED = "UNRANKED"; 
     q = qU[UNRANKED];   
   }else if(bodyR.length == 1){
    emoteR = tiers[bodyR[0].tier.toString()];
    q = qU[bodyR[0].queueType];
    rank = bodyR[0].rank.toString(); 
    tierM = bodyR[0].tier.toString().charAt(0).toUpperCase();  
    tierR = bodyR[0].tier.toString().slice(1).toLowerCase(); 
    tierX = tierM + tierR + " " + rank ; 
    winR = (eval(bodyR[0].wins) / (eval(bodyR[0].wins) + eval(bodyR[0].losses))* eval(100)) 
    stats = `\n**${bodyR[0].leaguePoints}LP** / ${bodyR[0].wins}W ${bodyR[0].losses}L\nWinrate: ${~~winR}%`;
   }else{    
    q = qU[bodyR[1].queueType];  
    emoteR = tiers[bodyR[1].tier.toString()].toString();  
    rank = bodyR[1].rank.toString(); 
    tierM = bodyR[1].tier.toString().charAt(0).toUpperCase();  
    tierR = bodyR[1].tier.toString().slice(1).toLowerCase(); 
    tierX = tierM + tierR + " " + rank ; 
    winR = (eval(bodyR[1].wins) / (eval(bodyR[1].wins) + eval(bodyR[1].losses))* eval(100)) 
    stats = `\n**${bodyR[1].leaguePoints}LP** / ${bodyR[1].wins}W ${bodyR[1].losses}L\nWinrate: ${~~winR}%`;   
   }  
     
   //Masteries  
   const site1 = `${protocol}${region}/lol/champion-mastery/v4/champion-masteries/by-summoner/${body.id}${api}`   
   fetch(site1)
   .then(res => res.json()).then(bodyM => {  
   request('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/de_DE/champion.json', function (error, response, bodyN) {
    
    var champ1 = bodyM[0].championId;
    var champ2 = bodyM[1].championId;
    var champ3 = bodyM[2].championId;
    var emoteC1 = "";
    var emoteC2 = "";
    var emoteC3 = "";  
    let list = JSON.parse(bodyN);
    let championList = list.data;

    for (var i in championList) {
      if (championList[i].key == champ1) {
        emoteC1 = champs[championList[i].name]; 
        champT1 = `**[${bodyM[0].championLevel}]** 1. ${championList[i].name}: ${numberWithCommas(bodyM[0].championPoints)}`
      }      
      if (championList[i].key == champ2) {
        emoteC2 = champs[championList[i].name];  
        champT2 = `**[${bodyM[1].championLevel}]** 2. ${championList[i].name}: ${numberWithCommas(bodyM[1].championPoints)}`
      }      
      if (championList[i].key == champ3) {
        emoteC3 = champs[championList[i].name]; 
        champT3 = `**[${bodyM[2].championLevel}]** 3. ${championList[i].name}: ${numberWithCommas(bodyM[2].championPoints)}`
      }        
    }

    
    //Send Profile 
    const embed = new Discord.MessageEmbed()

    .setColor(0xC76CF5)
    .setTitle("Profile: " + body.name)
    .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${body.profileIconId}.png`)
    .setDescription(`Here you go, ${body.name}!`)
    .addField('Level/Region', `${body.summonerLevel} / ${args[0].toUpperCase()}`, false)
    .addField('Top Champions', `${emoteC1}${champT1}\n${emoteC2}${champT2}\n${emoteC3}${champT3}`, true) 
    .addField('\u200b', `\u200b`, true)  
    .addField(`Rank: ${q}`, `${emoteR} **${tierX}**${stats}`, true)  
    .setFooter("Have a nice day!", process.env.BOT_AVATAR)
    .setTimestamp()  
    message.channel.send(embed)
    
       });
   }) 
   })        
  })     
   
   
}
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
