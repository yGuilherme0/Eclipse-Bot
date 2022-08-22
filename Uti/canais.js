const Discord = require('discord.js');

module.exports = {
  name: "canais",
  aliases: ['channels', 'channelsCount', 'canal'],

  run: async(client, message, args) => {

    let canais = message.guild.channels.cache.size;
    let chats = message.guild.channels.cache.filter(a => a.type === "GUILD_TEXT").size;
        let calls = message.guild.channels.cache.filter(a => a.type === "GUILD_VOICE").size;

    let embed = new Discord.MessageEmbed()
    .setTitle(`<:bl404_Analisar:1010691615972667452> | Canais Do Servidor!`)
    .setDescription(`===============> ** --- ** <===============\n**CHATS E CANAIS DE:**  **${message.guild}\n**===============> ** --- ** <===============\n\n\n<:StageRaiseHand:1010652087106949150> | Categorias e Canais: **${canais}** \n<:whitehastag_art:1010650894255263834> | Texto: **${chats}**\n<:4321voiceg:1010652130169860096> | Canais de Voz:  **${calls}** `)


    let enviar = message.reply({embeds: [embed]})
  }
}