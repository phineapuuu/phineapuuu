const Discord = require('discord.js')
const bot = new Discord.Client();



const token = 'SUPER SECRET TOKEN';


bot.on('ready', () => {
    console.log('Github is ready to go!')
    bot.user.setActivity(`Riiickyy's GITHUB`, {
        type: "WATCHING"
    })
})

bot.on('message', async message => {


    exports.run = (client, message, args) => {
    }
    module.exports.run = async (bot, message, args) => {


    }
    let args = message.content.slice(PREFIX.length).split(" ")
    switch (args[0]) {
        case 'ricky':
            if (message.author.bot || !message.content.startsWith(PREFIX)) return
            
            message.channel.send(" Hey There! I am Ricky from Philippines a Node.js Developer! ")
}
})
bot.login(token)

