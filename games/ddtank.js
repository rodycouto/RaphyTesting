const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var game = 'Ddtank'
  var link1 = 'http://www.337.com/pt/ddtank/'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var mc = 'MacOS'
  var li = 'Linux'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .setFooter(`Plataformas: ${win}m ${li}, ${mc}`)
  return message.inlineReply(GameEmbed)
}