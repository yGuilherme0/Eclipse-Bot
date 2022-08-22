const Discord = require('discord.js');
const process = require('process');
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: 'ping',
    aliases: ['latencia', 'ms'],

    run: async(client, message, args) => {

        let ping = client.ws.ping
        let memoria = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB";
        let uptime = moment
      .duration(process.uptime() * 1000)
      .format("d[d] h[h] m[m] e s[s]");

        




      
        
        let embed_1 = new Discord.MessageEmbed()
        .setTitle('Ping Do Bot')
        .setColor('BLACK')
        .setDescription(`** <:ping_baixo:1010647964823339108> | O meu ping está em \`${ping} ms\`.**`)


        const botoes = new Discord.MessageButton().setCustomId("info").setLabel("Mais Info").setStyle("PRIMARY").setEmoji("<:Informao:1011021978326540357>")

      
            

        

      


        let m = await message.channel.send({ embeds: [embed_1], components: [new Discord.MessageActionRow().addComponents(botoes)], fetchReply: true }).then(msg => {
            let filtro_1 = (m) => m.user.id === message.author.id && m.customId === "info";
            let coletor_1 = msg.createMessageComponentCollector({ filter: filtro_1, max: 1 });

            coletor_1.on("collect", () => {
                message.delete()

                let embed = new Discord.MessageEmbed()
                .setTitle(`<:bl404_Analisar:1010691615972667452> | Mais Informacoes`)
                .setColor("BLACK")
                .setDescription(`**Informacoes:**\n<:ping_baixo:1010647964823339108> | **O meu ping está em** \`${ping} ms\`.\n<:momram:1011041789974683708> | **Memoria Usada:** \`${memoria}\` \n**<:time:1011043314595803197> | Uptime: **\`${uptime}\` `);
                

                msg.edit({ content: null, embeds: [embed], components: [] })
            });
        })
    }
}