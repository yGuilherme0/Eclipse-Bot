const Discord = require("discord.js");

module.exports = {
    name: "id",
    aliases: ['pegarid'],

run: async(client, message, args) => {

let user = message.mentions.users.first() || message.author;

if(user.id === message.author.id) {
 return message.channel.send(`<:identidade:1010650989570838629> | **Aqui está o seu id:** \`${message.author.id}\``)
 
} else {

message.channel.send(`<:identidade:1010650989570838629> | **Aqui está o id de ${user}:** \`${user.id}\``);
}

}
}