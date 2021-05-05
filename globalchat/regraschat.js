const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {

    let prefix = db.get(`prefix_${message.guild.id}`)
    if (prefix === null) prefix = "-"

    const RegrasEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('📖 Regras do Global Chat')
        .setDescription('Fique atento as regras para não ser punido!')
        .addField('Punição: BAN', 'Figuras obscenas feitas com caracteres.\nTentativa de bugar a mensagem ou travar os demais')
        .addField('Punição: MUTE', 'Xingamentos e Palavrões sem moderação.\nBrigas e ofensas.\nDivulgação de dados pessoais ou outra pessoa.\nDivulgação de servidores.')
        .setFooter(`Precisa de ajuda? ${prefix}support`)

    return message.inlineReply(RegrasEmbed)
}