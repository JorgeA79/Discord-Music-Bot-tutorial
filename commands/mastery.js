const Discord = require("discord.js");
const fetch = require("node-fetch");
const apikey = process.env.LOL_API;
var request = require('request');
const normalizeUrl = require('normalize-url');
const moment = require('moment');

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
    
    
    
   var masteryArray1 = masteries.slice(0, 4).map((item) => {
      
     for (var i in championList) {
       if (championList[i].key == item.championId) {   
       var emote = champs[championList[i].name];   
       var id = championList[i].name;  
       var lvl = masteryEmote[item.championLevel]; 
       var points = numberWithCommas(item.championPoints);
       var text = `**${lvl} ${emote} ${id}** - ${points}`
       return text;
     }   
     }
   });
   var chestArray1 = masteries.slice(0, 4).map((item) => {
       var emote = chestEmote[item.chestGranted]
       var status = "";
       if(item.championLevel == 7){
       status = "Mastered";
       }else{
       status = `${item.tokensEarned} Tokens`;
       }
       var text = `${emote} - ${status}`
       return text;
   }); 
   var timeArray1 = masteries.slice(0, 4).map((item) => {
       var time =  moment(item.lastPlayTime).fromNow();
       var text = `${time}`
       return text;
   }); 

      var masteryArray2 = masteries.slice(5, 10).map((item) => {
      
     for (var i in championList) {
       if (championList[i].key == item.championId) {   
       var emote = champs[championList[i].name];   
       var id = championList[i].name;  
       var lvl = masteryEmote[item.championLevel]; 
       var points = numberWithCommas(item.championPoints);
       var text = `**${lvl} ${emote} ${id}** - ${points}`
       return text;
     }   
     }
   });
   var chestArray2 = masteries.slice(5, 10).map((item) => {
       var emote = chestEmote[item.chestGranted]
       var status = "";
       if(item.championLevel == 7){
       status = "Mastered";
       }else{
       status = `${item.tokensEarned} Tokens`;
       }
       var text = `${emote} - ${status}`
       return text;
   }); 
   var timeArray2 = masteries.slice(5, 10).map((item) => {
       var time =  moment(item.lastPlayTime).fromNow();
       var text = `${time}`
       return text;
   });
    
         var masteryArray3 = masteries.slice(10, 15).map((item) => {
      
     for (var i in championList) {
       if (championList[i].key == item.championId) {   
       var emote = champs[championList[i].name];   
       var id = championList[i].name;  
       var lvl = masteryEmote[item.championLevel]; 
       var points = numberWithCommas(item.championPoints);
       var text = `**${lvl} ${emote} ${id}** - ${points}`
       return text;
     }   
     }
   });
   var chestArray3 = masteries.slice(10, 15).map((item) => {
       var emote = chestEmote[item.chestGranted]
       var status = "";
       if(item.championLevel == 7){
       status = "Mastered";
       }else{
       status = `${item.tokensEarned} Tokens`;
       }
       var text = `${emote} - ${status}`
       return text;
   }); 
   var timeArray3 = masteries.slice(10, 15).map((item) => {
       var time =  moment(item.lastPlayTime).fromNow();
       var text = `${time}`
       return text;
   });  
    
    
   const embed = new Discord.MessageEmbed()
    .setAuthor(`${body.name} Masteries`, `http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/${body.profileIconId}.png`)
    .setColor(0xC76CF5)
    .setTitle("Profile: " + body.name)
    .setDescription(`Here are your masteries, ${body.name}!`)
    .addField(`Masteries/Points [${masteries.length - 1}]`, masteryArray1, true)
    .addField(`Chest/Status`, chestArray1, true)
    .addField(`Last Played`, timeArray1, true)
    .addField(`\u200b`, masteryArray2, true)
    .addField(`\u200b`, chestArray2, true)
    .addField(`\u200b`, timeArray2, true)
    .addField(`\u200b`, masteryArray3, true)
    .addField(`\u200b`, chestArray3, true)
    .addField(`\u200b`, timeArray3, true)
    .setImage('https://d1mt9jmphk9kik.cloudfront.net/teamdignitas/image1566790968.png')
    .setFooter("Have a nice day!", process.env.BOT_AVATAR)
    .setTimestamp();
    message.channel.send(embed)
  });  
  })
  })
  }
  };
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}  
const chestEmote = {
true:"<:chsetclaimed:723350808313200714>",
false:"<:chest:723350808405606470>"  
}
const masteryEmote = {
   1: "<:Mastery1:723348590088552479>",
   2: "<:Mastery2:723348590650458152>",
   3: "<:Mastery3:723348590499725332>",
   4: "<:Mastery4:723348590088552481>",
   5: "<:Mastery5:723348590298398751>",
   6: "<:Mastery6:723348590445068409>",
   7: "<:Mastery7:723348591111962685>"
}

const champs = {
   "Aatrox":"<:AatroxSquare:721850183306182677>",
   "Ahri": "<:AhriSquare:721850183314440284>",
   "Akali":"<:AkaliSquare:721850184023408640>",
   "Alistar":"<:AlistarSquare:721850191128559667>",
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
   "Xin Zhao":"<:Xin_ZhaoSquare:721856052785840158>",
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
