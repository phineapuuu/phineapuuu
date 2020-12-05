const Discord = require('discord.js')
const bot = new Discord.Client();

// These are the list of packages you are going to use (Discord.js)
// npm i discord.js

const PREFIX = 'PREFIX HERE'

// Here you can put your prefix that you will need to put everytime you want to run you command 
// (Example, your prefix is "!" and you will have run your command by doing "!help" something like that.)
const token = 'SUPER SECRET TOKEN';

// Here, you can put your token so you can login to your bot!

bot.on('ready', () => {
    console.log('Github is ready to go!')
    bot.user.setActivity(`Riiickyy's GITHUB`, {
        type: "WATCHING"
    })
})
// Here is the status and console log everytime you try to run or restart your bot!

bot.on('message', async message => {


    exports.run = (client, message, args) => {
    }
    module.exports.run = async (bot, message, args) => {


    }
    
    let args = message.content.slice(PREFIX.length).split(" ")
    switch (args[0]) {
        case 'ricky':
            // This is a Simple Setup Command! Recommend using a command handler if you already mastered this!
            if (message.author.bot || !message.content.startsWith(PREFIX)) return
            // This means that this command will only follow your PREFIX, and not respond to other prefixes!
            message.channel.send(" Hey There! I am Ricky from Philippines a Node.js Developer! ")
}
})
bot.login(token)
// This is also very important to run your bot!
// This code is the way to login to your bot with the token in your bot!


            

