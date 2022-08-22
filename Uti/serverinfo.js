const Discord = require("discord.js")

module.exports = {
    name: "serverinfo",
    aliases: ["svinfo"],// Coloque o nome do comando do arquivo
    

    run: async(client, message, args) => {

        let membros = message.guild.memberCount;
        let cargos = message.guild.roles.cache.size;
        let canais = message.guild.channels.cache.size;
        let servidor = message.guild;

        let chats = message.guild.channels.cache.filter(a => a.type === "GUILD_TEXT").size;
        let calls = message.guild.channels.cache.filter(a => a.type === "GUILD_VOICE").size;

        let emojis = message.guild.emojis.cache.size;
        let dono_id = message.guild.ownerId;
        let dono = message.guild.members.cache.get(dono_id);
        let impulsos = message.guild.premiumSubscriptionCount;
        let data = message.guild.createdAt.toLocaleDateString("pt-br");

        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.guild.name}`)
        
        .addFields(
            {
                name: `> \\📌 Principais:`,
                value: `<:Dono:1010651454354239609> | **Dono:** ${dono}\n <:members_icons:1010651645488660480> | **Membros:** \`${membros}\`\n<a:BoostUP:1010651818537263175> | **Impulsos:** \`${impulsos}\`\n<:identidade:1010650989570838629> | **ID:** \`${servidor.id}\``,
                inline: false
            },
            {
                name: `> \\💬 Canais:`,
                value: `<:StageRaiseHand:1010652087106949150> | **Geral:** \`${canais}\`\n<:whitehastag_art:1010650894255263834> | **Texto:** \`${chats}\`\n<:4321voiceg:1010652130169860096> | **Calls:** \`${calls}\``,
                inline: false
            },
            {
                name: `> \\💼 Cargos:`,
                value: `<:role_manager:1010652594491883551> | \`${cargos}\``,
                inline: true
            },
            {
                name: `\\😎 Emojis:`,
                value: `<a:EmojiDance:1010652734111875112> | \`${emojis}\``,
                inline: true
            },
            {
                name: `> \\📅 Data de criação:`,
                value: `<:data:1010651079463145585> | \`${data}\``,
                inline: false
            },
        );

        message.reply({ embeds: [embed] })

       
        
    }
}