const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var game = 'Gartic'
  var link1 = 'https://gartic.com.br/'
  var link2 = 'https://play.google.com/store/apps/details?id=com.gartic.Gartic&hl=pt_BR'
  var ps = 'Play Store'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var ios = 'iOS'
  var an = 'Android'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .addField(`${ps}`, `${link2}`)
    .setFooter(`Plataformas: ${an}, ${ios}, ${win}`)
  return message.inlineReply(GameEmbed)
}