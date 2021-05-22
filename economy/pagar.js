const db = require("quick.db")
const Discord = require("discord.js")
const ms = require("parse-ms")

exports.run = async (client, message, args) => {

    let timeout1 = 9140000
    let author1 = await db.fetch(`pego_${message.author.id}`)

    if (author1 !== null && timeout1 - (Date.now() - author1) > 0) {
        let time = ms(timeout1 - (Date.now() - author1))

        const presomax = new Discord.MessageEmbed()
            .setColor('#8B0000')
            .setTitle('🚨 Você está em prisão máxima!')
            .setDescription(`Liberdade em: ${time.hours}h ${time.minutes}m e ${time.seconds}s`)

        return message.inlineReply(presomax)
    } else {

        let user = message.mentions.members.first()
        let bot = message.mentions.members.bot

        let money = db.get(`mpoints_${message.author.id}`)
        if (money === null) money = '0'

        let prefix = db.get(`prefix_${message.guild.id}`)
        if (prefix === null) prefix = "-"

        const noargs = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('💸 Sistema de Pagamento')
            .setDescription('Page a galera, é simples e rápido!\n \n*RPoints perdidos não serão recuperados. Cuidado para não ser enganado*')
            .addField('Comando', '`' + prefix + 'pay @user quantia`\n' + '`' + prefix + 'pay @user all/tudo`')
            .setFooter('Apenas o dinheiro na carteira será válido para pagamentos.')

        if (!args[0]) { return message.inlineReply(noargs) }
        if (!args[1]) { return message.inlineReply('<:xis:835943511932665926> | Siga o formato correto!\n`' + prefix + 'pay @user valor`') }
        if (args[2]) { return message.inlineReply('<:xis:835943511932665926> | Nada além do comando, está bem? `' + prefix + 'pay @user valor`') }
        if (user === message.author) { return message.inlineReply('<:xis:835943511932665926> | Você não pode pagar você mesmo.') }
        if (user.id === '837147659898191902') { return message.inlineReply('<:xis:835943511932665926> | Eu não preciso do seu dinheiro, desculpa.')}
        if (bot) { return message.inlineReply('<:xis:835943511932665926> | Você não pode pagar bots.') }
        if (money < args[1]) { return message.inlineReply(`<:xis:835943511932665926> | Você precisa ter ${args[1]}<:RPoints:837666759389347910> na carteira para poder pagar ${user.user.username}.`) }
        if (args[1] < 0) { return message.inlineReply('<:xis:835943511932665926> | Dinheiro insuficiente.') }
        if (isNaN(args[1])) { return message.inlineReply('<:xis:835943511932665926> | O valor digitado não é um número.') }

        db.add(`cachepay_${message.author.id}`, args[1])
        db.subtract(`mpoints_${message.author.id}`, args[1])
        let cache = db.get(`cachepay_${message.author.id}`)

        const confirm = new Discord.MessageEmbed()
            .setColor('BLUE')
            .setTitle('Você confirma os dados a baixo?')
            .setDescription('O dinheiro pago não retornará para você a menos que te devolvam.')
            .addField('Informações', `Pagar **${args[1]}<:RPoints:837666759389347910>RPoints** para ${user} ?`)
            .setFooter('Auto delete em 30 segundos.')

        await message.inlineReply('A Raphy não se responsabiliza por dinheiro perdido.', confirm).then(msg => {
            msg.react('✅').catch(err => { return }) // Check
            msg.react('❌').catch(err => { return }) // X
            msg.delete({ timeout: 30000 }).catch(err => { return })

            msg.awaitReactions((reaction, user) => {
                if (message.author.id !== user.id) return

                if (reaction.emoji.name === '✅') { // Sim
                    msg.delete().catch(err => { return })
                    db.add(`mpoints_${message.mentions.members.first().id}`, cache)
                    db.delete(`cachepay_${message.author.id}`)

                    return message.inlineReply(`<a:Check:836347816036663309> | ${message.author} pagou ${args[1]}<:RPoints:837666759389347910>RPoints para ${message.mentions.members.first()}`)
                }
                if (reaction.emoji.name === '❌') { // Não
                    msg.delete().catch(err => { return })
                    db.add(`mpoints_${message.author.id}`, cache)
                    db.delete(`cachepay_${message.author.id}`)
                    message.inlineReply("Pagamento cancelado.")
                }
            })
        })
    }
}