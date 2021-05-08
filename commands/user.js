const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

  let prefix = db.get(`prefix_${message.guild.id}`)
  if (prefix === null) { prefix = "-" }

  let user = message.mentions.users.first() || message.author

  let color = db.get(`color_${user.id}`)
  if (color === null) color = "'#6F6C6C'"

  if (args[1]) { return message.inlineReply('<:xis:835943511932665926> Por favor, use apenas o comando `' + prefix + 'user @alguém` ou apenas `' + prefix + 'user`.' + ' Informações adicionais atrapalham meu processamento.') }
  if (!user) { '<:xis:835943511932665926> Hey! Mencione alguém para que eu possa saber de quem você quer o user#0000. `' + prefix + 'user @alguém`' }

  return message.inlineReply(
    new Discord.MessageEmbed()
      .setColor(color)
      .setTitle(`${user.username}`)
      .setDescription('📇`' + user.tag + '`')
  )
}