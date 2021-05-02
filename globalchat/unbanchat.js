const db = require("quick.db")

exports.run = async (client, message, args) => {

    let Moderador = db.get(`moderadoreschatglobal_${message.author.id}`)
    if (!Moderador) {
        message.delete().catch(err => { return })
        return message.channel.send('⚠️ Este é um comando restrito para Moderadores do Chat Global.')
    }

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let id = args[0]
    if (!id) { return message.inlineReply('`' + prefix + 'unbanchat ID`') }
    if (id.length < 17) { return message.channel.send("Isso não é um ID") }
    if (isNaN(id)) { return message.channel.send("Hey, isso não é um número.") }
    if (args[1]) { return message.channel.send('Nada além do ID do usuário, por favor.') }

    db.delete(`noglobalchat_${id}`)

    let ServidoresAtivados = db.fetch(`globalchat_${message.guild.id}`)
    if (message.channel.id === ServidoresAtivados) {

        client.guilds.cache.forEach(Canal => {
            try {
                client.channels.cache.get(db.fetch(`globalchat_${Canal.id}`)).send(`📢 *(${id})* teve o banimento removido por ${message.author.tag}!`)
            } catch (e) { return }
        })
    }
}