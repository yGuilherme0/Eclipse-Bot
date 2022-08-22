const Discord = require("discord.js")

module.exports = {
    name: "userinfo", // Coloque o nome do comando do arquivo
    aliases: ["uinfo"], // Coloque sinônimos aqui

    run: async(client, message, args) => {

        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let data = user.createdAt.toLocaleDateString("pt-br");
        let avatar = user.displayAvatarURL({ dynamic: true });

        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(avatar)
        .addFields(
            {
                name: `<:whitehastag_art:1010650894255263834> Tag`,
                value: `\`${user.tag}\``,
                inline: true
            },
            {
                name: `<:identidade:1010650989570838629> ID`,
                value: `\`${user.id}\``,
                inline: true
            },
            {
                name: `<:data:1010651079463145585> Data de criação da conta:`,
                value: `\`${data}\``,
                inline: false
            },
        );

        message.reply({ embeds: [embed] })


       
        
    }
}