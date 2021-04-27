const Discord = require("discord.js")

exports.run = async (client, message, args) => {


   
  let gif = 'https://imgur.com/sFBDKCA.gif'
  let array1 = ["cara", "coroa"]
  let rand = Math.floor(Math.random() * array1.length)

  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
    message.reply("insira `cara` ou `coroa` na frente do comando.")
  }
  else if (args[0].toLowerCase() == array1[rand]) {
    let embed = new Discord.MessageEmbed()
      .setImage(gif)
    message.inlineReply(embed).then(msg => msg.delete({ timeout: 4000 })).then(msg => message.inlineReply("Deu **" + array1[rand] + "**, você ganhou!"))
  }
  else if (args[0].toLowerCase() != array1[rand]) {
    let embed1 = new Discord.MessageEmbed()
      .setImage(gif)
    message.inlineReply(embed1).then(msg => msg.delete({ timeout: 4000 })).then(msg => message.inlineReply("Deu **" + array1[rand] + "**, você perdeu!"))
  }
}