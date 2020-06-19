const Discord = require("discord.js");
const fetch = require("node-fetch");
const apikey = process.env.LOL_API;
var request = require('request');
const normalizeUrl = require('normalize-url');


module.exports = {
  name: "mastery",
  description: "Pinging the bot",
  execute(client, message, args) {
  
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
  .then( res =>  res.json()).then(body => {
  
  const site1 = `${protocol}${region}/lol/champion-mastery/v4/champion-masteries/by-summoner/${body.id}${api}`   
  fetch(site1)
  .then(res => res.json()).then(masteries => {  
  
    
  request('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/de_DE/champion.json', function (error, response, champions) {  
    let list = JSON.parse(champions);
    let championList = list.data;
    
    var size = 10; 
   var masteryArray = masteries.slice(0, size).map((item) => {
      
     for (var i in championList) {
       if (championList[i].key == item.championId) {   
       var id = championList[i].name;  
       var lvl = item.championLevel; 
       var points = item.championPoints;
       var text = `${id},${lvl},${points}`
       return text;
     }   
     }
   });
    
  console.dir(masteryArray)
  });  
    
   const embed = new Discord.MessageEmbed()

    .setColor(0xC76CF5)
    .setTitle("Profile: " + body.name)
    .setThumbnail(`http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${body.profileIconId}.png`)
    .setDescription(`Here are your masteries, ${body.name}!`)
    .addField(`Masteries [${masteries.length - 1}]`, masteryArray)
    .setFooter("Have a nice day!", process.env.BOT_AVATAR)
    .setTimestamp();
    message.channel.send(embed)
  })
  })
  }
  };
  
function trimArray(arr, maxLen = 10){
if(arr.length > maxLen){
const len = arr.length - maxLen;
arr = arr.slice(0, maxLen).championId;

}
return arr;
}  
