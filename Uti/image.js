const Discord = require('discord.js');
const multi = require("multi-djs");

module.exports = {
    name: "image",

    run: async(client, message, args) => {

        let image = await multi.canvas.circle(message.author.displayAvatarURL({ dynamic: false, format: 'png' }));
        let attachment = new Discord.MessageAttachment(image, "circle.png");
        return message.channel.send({files: [attachment]});



    }
}