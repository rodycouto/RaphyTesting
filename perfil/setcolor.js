const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    let vip = db.get(`vip_${message.author.id}`)
    if (!vip) { return message.inlineReply('<:xis:835943511932665926> Este é um comando exclusivo para vips.\nSaiba mais em `' + prefix + 'vip`') }

    let vermelho = db.get(`red_${message.author.id}`)
    let branco = db.get(`white_${message.author.id}`)
    let laranja = db.get(`orange_${message.author.id}`)

    let color = await db.get(`color_${message.author.id}`)
    if (color === null) color = '#6F6C6C'

    const NoArgsEmbed = new Discord.MessageEmbed()
        .setColor(color)
        .setTitle('🖌️ Cores Raphy')
        .setDescription('Mude a cor das suas embeds com este comando.')
        .addField('Comando', '`' + prefix + 'setcolor cor`')
        .setFooter(`${prefix}slot colors`)

    if (!args[0]) return message.inlineReply(NoArgsEmbed)
    if (args[1]) return message.inlineReply('<:xis:835943511932665926> Nada além da sua cor, por favor.')
    if (!['red', 'vermelho', 'branco', 'white', 'laranja', 'yellow'].includes(args[0].toLowerCase())) return message.inlineReply('<:xis:835943511932665926> Esta cor não tem no registro vip.')

    if (['red', 'vermelho'].includes(args[0].toLowerCase())) {
        if (vermelho === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor vermelha, compre ela na `' + prefix + 'loja vip`')
        db.set(`color_${message.author.id}`, vermelho)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')
    }

    if (['branco', 'white'].includes(args[0].toLowerCase())) {
        if (branco === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor branca, compre ela na `' + prefix + 'loja vip`')
        db.set(`color_${message.author.id}`, branco)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')
    }

    if (['laranja', 'orange'].includes(args[0].toLowerCase())) {
        if (laranja === null) return message.inlineReply('<:xis:835943511932665926> Você não tem a cor amarela, compre ela na `' + prefix + 'loja vip`')
        db.set(`color_${message.author.id}`, laranja)
        return message.inlineReply('<a:Check:836347816036663309> Cor definida com sucesso!')
    }
}