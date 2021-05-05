const Discord = require("discord.js")

exports.run = async (client, message, args) => {

    const StopEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setImage('https://imgur.com/Esilp77.gif')

    return message.inlineReply(StopEmbed)
}