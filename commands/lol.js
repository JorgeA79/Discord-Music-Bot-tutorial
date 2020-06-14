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
   BR1: "br1.api.riotgames.com",
   EUN1: "eun1.api.riotgames.com",
   EUW1: "euw1.api.riotgames.com",
   JP1: "jp1.api.riotgames.com",
   KR: "kr.api.riotgames.com",
   LA1: "la1.api.riotgames.com",
   LA2: "la2.api.riotgames.com",
   NA1: "na1.api.riotgames.com",
   OC1: "oc1.api.riotgames.com",
   TR1: "tr1.api.riotgames.com",
   RU: "ru.api.riotgames.com"
   }
   const region = regions[argsx[0]];
   const name = argsx[1];
   message.channel.send(`${protocol}${region}/lol/summoner/v4/summoners/by-name/${name}${api}`)
   
   
   
}
}

async function getData() {
  const response = await fetch(site);
  const data = await response.json();
  return data
}
