const Discord = require('discord.js');

module.exports = {
  name: "invite",
  aliases: ['convite', 'add'],

  run: async(client, message, args) => {

    let embed_1 = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle('<:pgr_add:1011049562452005054> | Meu Convite!')
      .setDescription('<:ServerVerifiedIcon:1010649752771244122> | **Me adicione no meu servidor clicando:** [Aqui!](https://discord.com/api/oauth2/authorize?client_id=1010624276040253445&permissions=8&scope=bot%20applications.commands)')

    const botoes = new Discord.MessageButton().setLabel("Me Adicione!").setStyle("LINK").setEmoji("<:pgr_add:1011049562452005054>").setURL(`https://discord.com/api/oauth2/authorize?client_id=1010624276040253445&permissions=8&scope=bot%20applications.commands`)


    let m = await message.channel.send({ embeds: [embed_1], components: [new Discord.MessageActionRow().addComponents(botoes)], fetchReply: true })
     


  


  }
}