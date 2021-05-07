const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    const list = 'https://imgur.com/2DohYdC.gif'

    const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setImage(list)
    return message.inlineReply(embed)
}