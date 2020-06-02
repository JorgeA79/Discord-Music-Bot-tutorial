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
  if(args[0] == "taiko"){
    getOsu(`1`,args[1]);
     message.channel.send(getOsu.embed);
    
  }else if(args[0] == "osu"){
      getOsu(`0`,args[1]);
       message.channel.send(getOsu.embed);
    }
    else if(args[0] == "ctb"){
      getOsu(`2`,args[1]);
       message.channel.send(getOsu.embed);
    }
    else if(args[0] == "mania"){ 
      getOsu(`3`,args[1]);
      message.channel.send(getOsu.embed);
    }
}
}


function getOsu(mode, name){
          const embed = new Discord.MessageEmbed()
            .setDescription(`${name}'s Signature`)
            .setImage(`https://lemmmy.pw/osusig/sig.php?colour=hexff66aa&uname=${name}&mode=${mode}&countryrank&flagshadow&flagstroke&darktriangles&opaqueavatar&rankedscore&onlineindicator=undefined&xpbar&xpbarhex`)
            .setColor(0xC76CF5);
            
}
