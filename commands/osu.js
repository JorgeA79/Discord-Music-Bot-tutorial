const Discord = require("discord.js");

module.exports = {
  name: "osu",
  description: "Pinging the bot",
  execute(client, message, args) {
  
  if(!args[0]){
          const embed = new Discord.MessageEmbed()
            .setDescription(`You need to specify an osu mode`)
            .setColor(0xC76CF5)
            return message.channel.send(embed);
  }
  if(!args[1]){
   const embed = new Discord.MessageEmbed()
            .setDescription(`You need to specify an user`)
            .setColor(0xC76CF5)
            return message.channel.send(embed);
 }
 let args2= args[2];
 let args3= args[3];
 let args4= args[4];  
 let args5= args[5];  
 if(!args[2]) args2 = "";
 if(!args[3]) args3 = "";
 if(!args[4]) args4 = "";
 if(!args[5]) args5 = "";
    
  if(args[0] == "taiko"){

    const embed = new Discord.MessageEmbed()
            .setDescription(`${args[1]}${args2}${args3}${args4}${args5}'s Signature`)
            .setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${args[1]}${args[2]}${args[3]}${args[4]}${args[5]}&mode=1&countryrank&flagshadow&flagstroke&darktriangles&opaqueavatar&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
            .setColor(0xC76CF5);
     message.channel.send(embed);
    
  }else if(args[0] == "osu"){

     const embed = new Discord.MessageEmbed()
            .setDescription(`${args[1]}${args2}${args3}${args4}${args5}'s Signature`)
            .setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${args[1]}${args[2]}${args[3]}${args[4]}${args[5]}&mode=0&countryrank&flagshadow&flagstroke&darktriangles&opaqueavatar&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
            .setColor(0xC76CF5);
            message.channel.send(embed);
    }
    else if(args[0] == "ctb"){
      const embed = new Discord.MessageEmbed()
            .setDescription(`${args[1]}${args2}${args3}${args4}${args5}'s Signature`)
            .setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${args[1]}${args[2]}${args[3]}${args[4]}${args[5]}&mode=2&countryrank&flagshadow&flagstroke&darktriangles&opaqueavatar&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
            .setColor(0xC76CF5);
            message.channel.send(embed);
    }
    else if(args[0] == "mania"){ 
      getOsu(`3`,args[1]);
     const embed = new Discord.MessageEmbed()
            .setDescription(`${args[1]}${args2}${args3}${args4}${args5}'s Signature`)
            .setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${args[1]}${args[2]}${args[3]}${args[4]}${args[5]}&mode=3&countryrank&flagshadow&flagstroke&darktriangles&opaqueavatar&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
            .setColor(0xC76CF5);
            message.channel.send(embed);
    }
}
}


function getOsu(mode, name){
          
            
}
