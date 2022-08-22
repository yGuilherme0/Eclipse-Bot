const { MessageEmbed, MessageButton, MessageActionRow, MessageCollector } = require('discord.js');


module.exports = {
    name: "help",
    aliases: ['ajuda', 'commands', 'comandos'],
    description: 'Lista de comandos',
run: async(client, message, args) => {
    setTimeout(() => message.delete(), 0)

  let p = 'e.' 

    const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setStyle("LINK")
                .setURL("https://discord.com/api/oauth2/authorize?client_id=1010624276040253445&permissions=8&scope=bot%20applications.commands") // por o convite do seu bot
                .setLabel("Me Adicione")
                .setEmoji(`<:ServerVerifiedIcon:1010649752771244122>`) // por um emoji do seu gosto
                .setDisabled(false),
            new MessageButton()
                .setCustomId("categoria_utilidades")
                .setStyle("SECONDARY")
                .setLabel("Utilidades")
                .setEmoji(`<:StageRaiseHand:1010652087106949150>`) // por um emoji do seu gosto
                .setDisabled(false),
            new MessageButton()
                .setCustomId("categoria_moderação")
                .setStyle("SECONDARY")
                .setLabel("Moderação")
                .setEmoji(`<a:offline:1010657398417014905>`) // por um emoji do seu gosto
                .setDisabled(false),
            new MessageButton()
                .setCustomId("fechar")
                .setStyle("DANGER")
                .setLabel("Fechar Painel")
                .setEmoji(`<:role_manager:1010652594491883551>`) // por um emoji do seu gosto
                .setDisabled(false)
            )

    const Painel = new MessageEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL())
        .setTitle(`Painel de comandos | ${client.user.username}`)
        .setDescription(
                        `> Olá me chamo ${client.user.username} fui criado para ajudar nas Estatisticas e Informacoes do seu servidor.\n` +
                        `**Lista De Comandos a Baixo:** \n\n` +
                        ` Ultilidades\n` +
                        ` Moderação\n\n` +
                        `> __**Entre no meu servidor de suporte**([clica aqui](https://discord.com/api/oauth2/authorize?client_id=1010624276040253445&permissions=8&scope=bot%20applications.commands))__`
                       )
        .setColor(`#000001`)
        .setThumbnail(message.guild.iconURL())
        .setFooter(`ID ${message.guild.id}`, message.guild.iconURL())
    const m = await message.channel.send({ embeds: [Painel], components: [row], fetchReply: true })

    const iFilter = i => i.user.id === message.author.id;
    
    const collector = m.createMessageComponentCollector({ filter: iFilter, time: 10 * 60000 });

        collector.on('collect', async(i) => {
            i.deferUpdate()
            switch (i.customId) {
                case `categoria_utilidades`:
                    m.edit({
                        embeds: [
                            
                            new MessageEmbed()
                                .setAuthor(message.guild.name, message.guild.iconURL())
                                .setTitle(` Utilidades | ${client.user.username}`)
                                .setDescription(`
                                <:aviso:1010691804112375888>: **Sumario:**
                                [] - Aliases

                                <:bl404_Analisar:1010691615972667452> | **Lista De Comandos:**

                                **${p}botinfo** *[btinfo]*
                                **${p}userinfo** *[uinfo]*
                                **${p}serverinfo** *[svinfo]*
                                **${p}membros** *[mem]*
                                **${p}ping** *[ms]*
                                **${p}id** *[pegarid]*
                                **${p}cleardm** *[limpardm]*
                                
                                `)
                                                
                
                                .setColor(`#000001`)
                                .setThumbnail(message.guild.iconURL())
                                .setTimestamp()
                                .setFooter(`ID: ${message.guild.id}`, message.guild.iconURL())
                        ]
                    })
                  break;
                case `categoria_moderação`:
                    m.edit({
                        embeds: [
                            new MessageEmbed()
                                .setAuthor(message.guild.name, message.guild.iconURL())
                                .setTitle(` Moderção | ${client.user.username}`)
                                .setDescription(`
                                <:aviso:1010691804112375888>: **Sumario:**
                                [] - Aliases

                                <:bl404_Analisar:1010691615972667452> | **Lista De Comandos:**

                                **${p}say** *[falar]*
                                

                                
                                `)
                                .setColor(`#000001`)
                                .setThumbnail(message.guild.iconURL())
                                .setTimestamp()
                                .setFooter(`ID: ${message.guild.id}`, message.guild.iconURL())
                        ]
                    })
                  break;
                case `fechar`:
                   setTimeout(() => m.delete(), 100)
                
            }
        })

    }
}