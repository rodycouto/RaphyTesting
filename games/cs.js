const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var game = 'Counter-Strike: Global Offensive'
  var link1 = 'https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/'
  var st = 'Steam'
  var pt = 'PlayStation'
  var win = 'Microsoft Windows'
  var x = 'Xbox'
  var mc = 'MacOS'
  var li = 'Linux'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${st}`, `${link1}`)
    .setFooter(`Plataformas: ${win}, ${mc}, ${pt} 3/4, ${li}, ${x} 360`)
  return message.inlineReply(GameEmbed)
}