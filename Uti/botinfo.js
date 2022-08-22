const Discord = require("discord.js")
const moment = require("moment");
require("moment-duration-format");

module.exports = {
    name: "botinfo", // Coloque o nome do comando do arquivo
    aliases: ["btinfo"], // Coloque sinônimos aqui

    run: async (client, message, args) => {

        let servidor = client.guilds.cache.size;
        let usuarios = client.users.cache.size;
        let canais = client.channels.cache.size;
        let ping = client.ws.ping;
        let comandos = client.commands.size;
    const uptime = moment
      .duration(process.uptime() * 1000)
      .format("d[d] h[h] m[m] e s[s]");
    const memory =
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + "MB";
        //let dono_id = ""; 
        //let dono = client.users.cache.get(dono_id);
        let prefixo = 'e.';
        let versao = "^13.6.0";

        let embed = new Discord.MessageEmbed()
            .setColor("#000080")
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp(new Date)
            .setDescription(`===============> ** Geral ** <===============\n
\\👋 Olá ${message.author}, sou o \`${client.user.username}\`, meu prefixo é \`${prefixo}\`\n\\💻 **Veja meus comandos com** \`${prefixo}help\`.
<:ServerVerifiedIcon:1010649752771244122> | **Atualmente estou gerenciando** \`${servidor}\` **servidores,** \`${usuarios}\` **usuários e** \`${canais}\` **canais de servidores.**
<:ping_baixo:1010647964823339108> | Meu ping está em \`${ping} ms\`.
<:pasta_amarela:1011044978073546752> | **Tenho ** \`${comandos}\` **Comandos de Utilidade e Informacoes!**
<a:developer:1010649587427594321> | Fui criado pelo \`zyz'#1234 e o LHz'xD#0830\`, na linguagem JavaScript, utilizando NodeJs e a livraria Discord.Js na versão \`${versao}\`.\n
===============> ** Info Tecnicas** <===============\n
<:time:1011043314595803197> | **Estou Acordado a:** \`${uptime}\`
<:momram:1011041789974683708> | **Memoria Sendo Usada:** \`${memory}\`\n
===============> ** Me Adicione! ** <===============\n
<:Bot:1010649465633394799> | **Voce Pode me Adicionar Clicando [Aqui](https://discord.com/api/oauth2/authorize?client_id=1010624276040253445&permissions=8&scope=bot%20applications.commands)**

`);

        message.reply({ embeds: [embed] })



    }
}