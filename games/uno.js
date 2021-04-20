const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  var game = 'Uno - Ubisoft'
  var link1 = 'https://www.ubisoft.com/pt-br/game/uno/uno'
  var link2 = 'https://store.steampowered.com/search/?term=uno'
  var st = 'Steam'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var mc = 'MacOS'
  var ios = 'iOS'
  var an = 'Android'
  var li = 'Linux'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${st}`, `${link2}`)
    .setFooter(`Plataformas: ${win}, ${mc}, ${li}, ${an}, ${ios}`)
  return message.inlineReply(GameEmbed)
}