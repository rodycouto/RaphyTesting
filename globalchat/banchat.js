const Discord = require("discord.js")
const db = require('quick.db')

exports.run = async (client, message, args) => {

    let Moderador = db.get(`moderadoreschatglobal_${message.author.id}`)
    if (!Moderador) {
        message.delete().catch(err => { return })
        return message.channel.send('⚠️ Este é um comando restrito para Moderadores do Chat Global.')
    }

    let id = args[1]
    if (!id) { return message.inlineReply('`' + prefix + 'banchat ID`') }
    if (id.length < 17) { return message.channel.send("Isso não é um ID") }
    if (isNaN(id)) { return message.channel.send("Isso não é um número.") }
    if (args[1]) { return message.channel.send('Nada além do ID do usuário, por favor.') }

    db.add(`noglobalchat_${id}`, id)
    message.channel.send(`📢 ${user} foi banido e não consegue mais falar no chat global!`)

    client.guilds.cache.forEach(guild => {

        let CanaisValidos = guild.channels.cache.find(ch => ch.name === "naya-global-chat")

        if (!CanaisValidos) return

        return CanaisValidos.send(`📢 ${user.username} foi banido e não consegue mais falar no chat global!`)
    })
}