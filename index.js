const Discord = require("discord.js"); 
const client = new Discord.Client({intents: 32767});
const config = require("./config.json"); 
const multi = require("multi-djs");


client.login(config.token); 

client.once('ready', async () => {
    client.user.setActivity("Em Desenvolvimento..."); 

    console.log("✅ - Estou online!")

})

/*
client.on('messageCreate', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});
*/
const fs = require("fs");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync(`./commands/`);

fs.readdirSync('./commands/').forEach(local => {
    const comandos = fs.readdirSync(`./commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))

    for(let file of comandos) {
        let puxar= require(`./commands/${local}/${file}`)

        if(puxar.name) {
            client.commands.set(puxar.name, puxar)
        } 
        if(puxar.aliases && Array.isArray(puxar.aliases))
        puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    } 
});



client.on("messageCreate", async (message) => {

    let prefix = config.prefix;
  
      if (message.author.bot) return;
      if (message.channel.type == 'dm') return;
      if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {
        message.reply(`<a:sino_2:1010655836328165567> | meu prefixo é \`${prefix}\`, Use \`${prefix}help\``)


      }
      
  
       if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    
      if(message.author.bot) return;
      if(message.channel.type === 'dm') return;
  
      if(!message.content.startsWith(prefix)) return;
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
  
      let cmd = args.shift().toLowerCase()
      if(cmd.length === 0) return;
      let command = client.commands.get(cmd)
      if(!command) command = client.commands.get(client.aliases.get(cmd)) 
    
  try {
      command.run(client, message, args)
  } catch (err) { 
 
     console.error('Erro:' + err); 
  }
      });

      client.on('presenceUpdate', async (oldPresence, newPresence) => {

        let role = newPresence.guild.roles.cache.get("1010666341658796042") // Coloque o ID do cargo
        let status = newPresence.activities[0]?.state === "Eclipse Bot" // Coloque o que você deseja que o usuário deixe no status
    
        if (!role) return;
        if (newPresence.activities[0]?.type === "invisible" && role) return;
    
        if (newPresence.activities[0]?.type === "online" && !status){
    
            newPresence.member.roles.remove(role.id)
    
        } else if (newPresence.activities[0]?.type === "idle" && !status){
    
            newPresence.member.roles.remove(role.id)
    
        } else if (newPresence.activities[0]?.type === "dnd" && !status){
    
            newPresence.member.roles.remove(role.id)
    
        } else if(newPresence.activities[0]?.type === "CUSTOM"){
    
        if (status){
    
        newPresence.member.roles.add(role.id) // Adicionando o cargo ao usuário
    
        } else {
    
        newPresence.member.roles.remove(role.id)
    
        }
    
         } else if(role) {
    
            newPresence.member.roles.remove(role.id)
    
         }
    
    });


    process.on('multipleResolves', (type, reason, promise) => {
        console.log(`🚫 Erro Detectado\n\n` + type, promise, reason)
    });
    process.on('unhandRejection', (reason, promise) => {
        console.log(`🚫 Erro Detectado:\n\n` + reason, promise)
    });
    process.on('uncaughtException', (error, origin) => {
        console.log(`🚫 Erro Detectado:\n\n` + error, origin)
    });
    process.on('uncaughtExceptionMonitor', (error, origin) => {
        console.log(`🚫 Erro Detectado:\n\n` + error, origin)
    });




