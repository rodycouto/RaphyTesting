const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  var game = 'League of Legends'
  var link1 = 'https://na.leagueoflegends.com/pt-br/'
  var site = 'Site Oficial'
  var win = 'Microsoft Windows'
  var mc = 'MacOS'

  var GameEmbed = new Discord.MessageEmbed()
    .setColor('BLUE')
    .setTitle(`${game}`)
    .addField(`${site}`, `${link1}`)
    .setFooter(`Plataformas: ${win}, ${mc}`)
  return message.inlineReply(GameEmbed)
}