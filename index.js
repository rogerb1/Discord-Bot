const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = "NjEwOTU1MjQxMjQ4MjYwMTIz.XVM4mg.9VljxxQiQ2fVqmMYL3MF7byEaMM";

bot.on('message', function (message) {
    if (message.content == 'Hello') {
        message.reply("  Hello how are you? ");
    }
});


bot.login(TOKEN);