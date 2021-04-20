const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var game = 'Valorant'
  var link1 = 'https://playvalorant.com/pt-br/'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .setFooter(`Plataformas: ${win}`)
  return message.inlineReply(GameEmbed)
}