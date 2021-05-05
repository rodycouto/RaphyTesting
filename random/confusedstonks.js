const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    const ConnfusedStonksEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setImage('https://imgur.com/kffGSVY.gif')

    return message.inlineReply(ConnfusedStonksEmbed)
}