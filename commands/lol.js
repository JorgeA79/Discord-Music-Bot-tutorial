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
   "Aatrox":"<:AatroxSquare:721850183306182677>",
   "Ahri": "<:AhriSquare:721850183314440284>",
   "Akali":"<:AkaliSquare:721850184023408640>",
   "Allistar":"<:AlistarSquare:721850191128559667>",
   "Amumu":"<:AmumuSquare:721850191849979991>",
   "Anivia":"<:AniviaSquare:721850195612270673>",
   "Annie":"<:AnnieSquare:721850192952819742>",
   "Aphelios":"<:ApheliosSquare:721850188406456411>",
   "Ashe":"<:AsheSquare:721850193544347698>",
   "Aurelion Sol":"<:Aurelion_SolSquare:721850195440304171>",
   "Azir":"<:AzirSquare:721850191740928081>",
   "Bard":"<:BardSquare:721850193573576714>",
   "Blitzcrank":"<:BlitzcrankSquare:721850193263460413>",
   "Brand":"<:BrandSquare:721850193246683147>",
   "Braum":"<:BraumSquare:721850191644328068>",
   "Caitlyn":"<:CaitlynSquare:721850192520937582>",
   "Camille":"<:CamilleSquare:721850198007218238>",
   "Cassiopeia":"<:CassiopeiaSquare:721850192306897008>",
   "Cho'Gath":"<:ChoGathSquare:721850193309466626>",
   "Corki":"<:CorkiSquare:721850189257768970>",
   "Darius":"<:DariusSquare:721850195494567989>",
   "Diana":"<:DianaSquare:721850192110026842>",
   "Dr. Mundo":"<:Dr:721850193091362837>",
   "Draven":"<:DravenSquare:721850192680321085>",
   "Ekko":"<:EkkoSquare:721850192701292625>",
   "Elise":"<:EliseSquare:721850193049550889>",
   "Evelynn":"<:EvelynnSquare:721850188980944937>",
   "Ezreal":"<:EzrealSquare:721850193217060948>",
   "Fiddlesticks":"<:FiddlesticksSquare:721850190134509678>",
   "Fiora":"<:FioraSquare:721850195653951560>",
   "Fizz":"<:FizzSquare:721850192785047662>",
   "Galio":"<:GalioSquare:721850196060930129>",
   "Gangplank":"<:GangplankSquare:721850196119519322>",
   "Garen":"<:GarenSquare:721850193519181905>",
   "Gnar":"<:GnarSquare:721850192902488164>",
   "Gragas":"<:GragasSquare:721850192902619229>",
   "Graves":"<:GravesSquare:721850193003413636>",
   "Hecarim":"<:Hecarim:721850940113682532>",
   "Heimerdinger":"<:HeimerdingerSquare_Unreleased:721850194366431322>",
   "Illaoi":"<:IllaoiSquare:721850197331935305>",
   "Irelia":"<:IreliaSquare:721850190763655179>",
   "Ivern":"<:IvernSquare:721850197570748486>",
   "Janna":"<:JannaSquare:721850193099751544>",
   "Jarvan IV":"<:Jarvan_IVSquare:721850193745674317>",
   "Jax":"<:JaxSquare:721850193003151414>",
   "Jayce":"<:JayceSquare:721850193099620362>",
   "Jhin":"<:JhinSquare:721850197579399278>",
   "Jinx":"<:JinxSquare:721850193859051601>",
   "Kai'Sa":"<:KaiSaSquare:721850190461534249>",
   "Kalista":"<:KalistaSquare:721851081768042586>",
   "Karma":"<:KarmaSquare:721853170703401072>",
   "Karthus":"<:KarthusSquare:721853180106768476>",
   "Kassadin":"<:KassadinSquare:721853180819931167>",
   "Katarina":"<:KatarinaSquare_Unreleased:721853180161425428>",
   "Kayle":"<:KayleSquare:721853176117985389>",
   "Kayn":"<:KaynSquare:721853176759713792>",
   "Kennen":"<:KennenSquare:721853182845911120>",
   "Kha'Zix":"<:KhaZixSquare:721853179737669723>",
   "Kindred":"<:KindredSquare:721853180207562794>",
   "Kled":"<:KledSquare:721853177468682271>",
   "Kog'Maw":"<:KogMawSquare:721853181210132551>",
   "LeBlanc":"<:LeBlancSquare:721853180488712333>",
   "Lee Sin":"<:Lee_SinSquare:721853179028963419>",
   "Leona":"<:LeonaSquare:721853180891234394>",
   "Lissandra":"<:LissandraSquare:721853181583294485>",
   "Lucian":"<:LucianSquare:721853180891365386>",
   "Lulu":"<:LuluSquare:721853180333260853>",
   "Lux":"<:LuxSquare:721853180803154012>",
   "Malphite":"<:MalphiteSquare:721853180551626872>",
   "Malzahar":"<:MalzaharSquare:721853182950637658>",
   "Maokai":"<:MaokaiSquare:721853180996223118>",
   "Master Yi":"<:Master_YiSquare:721853180391981070>",
   "Miss Fortune":"<:MissFortuneSquare:721853178701676584>",
   "Mordekaiser":"<:MordekaiserSquare:721853177967673385>",
   "Morgana":"<:MorganaSquare:721853178311606352>",
   "Nami":"<:NamiSquare:721853181386293308>",
   "Nasus":"<:NasusSquare:721853181595746417>",
   "Nautilus":"<:NautilusSquare:721853181578969138>",
   "Neeko":"<:NeekoSquare:721853178987020308>",
   "Nidalee":"<:NidaleeSquare:721853181105012767>",
   "Nocturne":"<:NocturneSquare:721853181172121671>",
   "Nunu & Willump":"<:Nunu__WillumpSquare:721853178630373516>",
   "Olaf":"<:OlafSquare:721853181507928075>",
   "Orianna":"<:OriannaSquare:721853180698165409>",
   "Ornn":"<:OrnnSquare:721853178496155669>",
   "Pantheon":"<:PantheonSquare:721853179188215868>",
   "Poppy":"<:PoppySquare:721853182908825611>",
   "Pyke":"<:PykeSquare:721853178076725349>",
   "Qiyana":"<:QiyanaSquare:721853179129495552>",
   "Quinn":"<:QuinnSquare:721853181184966738>",
   "Rakan":"<:Rakan:721853459946668063>",
   "Rammus":"<:RammusSquare:721853182627676181>",
   "Rek'Sai":"<:RekSaiSquare1:721853373745463327>",
   "Renekton":"<:RenektonSquare:721853182023827546>",
   "Rengar":"<:RengarSquare_Unreleased:721853181541351456>",
   "Riven":"<:RivenSquare:721853181742678096>",
   "Rumble":"<:RumbleSquare:721853181902192670>",
   "Ryze":"<:RyzeSquare:721853183219204206>",
   "Sejuani":"<:SejuaniSquare:721853181679894651>",
   "Senna":"<:SennaSquare:721853178630373386>",
   "Sett":"<:SettSquare:721856044380192801>",
   "Shaco":"<:ShacoSquare:72185604505144085>",
   "Shen":"<:ShenSquare:721856056954847232>",
   "Shyvana":"<:ShyvanaSquare:721856054949838878>",
   "Singed":"<:SingedSquare:721856055012884510>",
   "Sion":"<:SionSquare:721856053855256627>",
   "Sivir":"<:SivirSquare:721856054509436938>",
   "Skaner":"<:SkarnerSquare:721856054522019901>",
   "Sona":"<:SonaSquare:721856053905719296>",
   "Soraka":"<:SorakaSquare:721856055390502912>",
   "Swain":"<:SwainSquare:721856050990546954>",
   "Sylas":"<:SylasSquare:721856051007193138>",
   "Syndra":"<:SyndraSquare:72185605004626974>",
   "Tahm Kench":"<:TahmKenchSquare:721856634120437852>",
   "Taliyah":"<:TaliyahSquare:721856057349242902>",
   "Talon":"<:TalonSquare:721856054727540907>",
   "Taric":"<;TaricSquare:721856057239928933>",
   "Teemo":"<:TeemoSquare:721856055495360523>",
   "Thresh":"<:ThreshSquare:721856055281319979>",
   "Tristana":"<:TristanaSquare:721856057734856794>",
   "Trundle":"<;TrundleSquare:721856055772053635>",
   "Tryndamere":"<:TryndamereSquare:721856056225038467>",
   "Twisted Fate":"<:Twisted_FateSquare:721856055340040293>",
   "Twitch":"<:TwitchSquare:721856055629447170>",
   "Udyr":"<:UdyrSquare:721856056292278314>",
   "Urgot":"<:UgorSquare:721856052949418045>",
   "Varus":"<:VarusSquare:721856052806680628>",
   "Vayne":"<:VayneSquare:721856056111923281>",
   "Veigar":"<:VeigerSquare:721856055490904389>",
   "Vel'Koz":"<:VelKozSquare:721856055809802261>",
   "Viktor":"<:ViktorSquare:721856055897882715>",
   "Vi":"<:ViSquare:721856056434753567>",
   "Vladimir":"<:VladimirSquare:721856055222599701>",
   "Volibear":"<:VolibearSquare:721856053805056040>",
   "Warwick":"<:WarwickSquare:721856057386729513>",
   "Wukong":"<:WukongSquare:721856053247213588>",
   "Xayah":"<:Xayah:721856439156605018>",
   "Xerath":"<:XerathSquare:721856055528652921>",
   "Xin Zao":"<:Xin_ZhaoSquare:721856052785840158>",
   "Yasuo":"<:YasuoSquare:721856055990026310>",
   "Yorick":"<:YorickSquare1:721856333590298768>",
   "Yuumi":"<:YuumiSquare:721856052819394620>",
   "Zac":"<:ZacSquare:721856055306485760>",
   "Zed":"<:ZedSquare:721856056623497246>",
   "Ziggs":"<:ZiggsSquare:721856056275370004>",
   "Zilean":"<:ZileanSquare:721856056158060666>",
   "Zoe":"<:ZoeSquare:721856053159002223>",
   "Zyra":"<:ZyraSquare:721856055902076978>"
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
   
  try {
        
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
  
               
   const site4 = `${protocol}${region}/lol/match/v4/matchlists/by-account/${body.accountId}${api}`;    
   fetch(site4)
   .then(res => res.json()).then(bodyX => {    
      var champUsed = bodyX.matches[0].champion; 
      const site5 = `${protocol}${region}/lol/match/v4/matches/${bodyX.matches[0].gameId}${api}`

      request('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/de_DE/champion.json', function (error, response, bodyN) {
            
         let list = JSON.parse(bodyN);
         let championList = list.data;
         
         for (var i in championList) {
            if (championList[i].key == champUsed) {
            var emoteC1 = champs[championList[i].name]; 
            var champT = championList[i].name;              
               message.channel.send(`Last game ${emoteC1}${champT}`)
               }
          }
        });  
        request(site5, function (error, response, bodyN) {
            
         let list = JSON.parse(bodyN);
         let championList = list.participants;
         
         for (var i in championList) {
            if (championList[i].championId == champUsed) {
            
              var kills = championList[i].stats.kills 
              var deaths = championList[i].stats.deaths 
              var assists = championList[i].stats.assists
              var win = championList[i].win;
              var textW =""; 
              if(win == true) textW= "Winned"; 
              if(win == false) textW= "Lost";  
               message.channel.send(`${textW} last game ${kills}/${deaths}/${assists}`)
               }
          }
         
         
        });  
       })            
               
               
               
               
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
    if(bodyM.length < 3){
    champT1 = `**Not enough champions to display**`;
    champT2 = "";
    champT3 = "";   
    }else{
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
    .addField(`Last Game:`, `xd`, false)  
    .setFooter("Have a nice day!", process.env.BOT_AVATAR)
    .setTimestamp()  
    message.channel.send(embed)
    
       });
   }) 
   })        
  })
  }catch(err){
      const embed = new Discord.MessageEmbed()
      .setDescription("Couldn't find anything <a:x_:713677703756251147>")
      .setColor(0xC76CF5);
      return message.channel.send(embed);
  } 
 
   
   
}
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
