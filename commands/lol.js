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
   var name = argsx[1];
   name = name.replace(/\s+/g, '%20').toLowerCase();
   const site = `${protocol}${region}/lol/summoner/v4/summoners/by-name/${name}${api}`; 

      const  info =  getData(site);
      const  embed = getEmbed(info);
      message.channel.send(embed);
   
   
}
}

async function getData(site) {
  const response = fetch(site);
  const data = response.json();
  return data
}

function getEmbed(info){
  const embed = new Discord.MessageEmbed()

    .setColor(0x00AE86)
    .setTitle("Profile: " + info[0].name)
    .setDescription("Here you go, summoner!")
    .addField('\u200b', '\u200b')
    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
    .addField('Level', `${info[0].summonerLevel}`, true)
    .setFooter("Jon and Ric")
    .setTimestamp()

    return embed
}

