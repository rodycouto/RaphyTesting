const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) { prefix = "-" }

    const NoArgs0 = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('.|. Veja o tamanho')
        .setDescription('Com este comando você consegue ver o tamanho do brinquedo de alguém.')
        .addField('Comando', '`' + prefix + 'howbig @user`')

    if (!args[0]) { return message.inlineReply(NoArgs0) }
    if (args[1]) { return message.inlineReply('<:xis:835943511932665926> Sem informações além do @user, por favor.') }

    let user = message.mentions.members.first()
    if (user.id === '837147659898191902') { return message.inlineReply('Eu não tenho essa coisa, para com isso!') }
    
    let pintos = [
        '3====================D',
        '3===================D',
        '3==================D',
        '3=================D',
        '3================D',
        '3===============D',
        '3==============D',
        '3=============D',
        '3============D',
        '3===========D',
        '3==========D',
        '3=========D',
        '3========D',
        '3=======D',
        '3======D',
        '3=====D',
        '3====D',
        '3===D',
        '3==D',
        '3=D',
        'Não achei nada aqui :cry:'
    ]
    let piinto = pintos[Math.floor(Math.random() * pintos.length)]

    const Piiinto = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`Tamanho do brinquedo de ${user.user.username}`)
        .setDescription(piinto)
    return message.inlineReply(Piiinto)

}