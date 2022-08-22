const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'memebers',
    aliases: ["mem", "membercount", "membros"],

    run: async (client, message, args) => {

        let quantidade_de_membros = message.guild.memberCount;
        let quantidade_de_membros_online = message.guild.members.cache.filter((x) => x.presence?.status == 'online').size;
        let quantidade_de_membros_ausentes = message.guild.members.cache.filter((x) => x.presence?.status == 'idle').size;
        let quantidade_de_membros_ocupados = message.guild.members.cache.filter((x) => x.presence?.status == 'dnd').size;
        let quantidade_de_membros_offline = message.guild.members.cache.filter((x) => x.presence?.status == null).size;

        let embed = new MessageEmbed()
            .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription(`>  <:members_icons:1010651645488660480> |**Total de membros:** \`${quantidade_de_membros}\`.\n
> <a:Online:1010657356331356180> | **Membros Online:** \`${quantidade_de_membros_online}\`.
> <:idle:1010657535843368962> | **Membros Ausentes:** \`${quantidade_de_membros_ausentes}\`.
> <a:offline:1010657398417014905> | **Membros Ocupados:** \`${quantidade_de_membros_ocupados}\`.
> <:offlinestatus:1010657984952676372> | **Membros Offline:** \`${quantidade_de_membros_offline}\`.
`)
            .setColor(`RANDOM`)
            .setFooter({ text: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) });

        message.reply({ embeds: [embed] });
    }
}    