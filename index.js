const Discord = require('discord.js');
const bot = new Discord.Client();
const token = "NDYwMDA4ODc0NDA2MzEzOTg0.Dg-gLA.NaooLRM7avTWQdSTDGOiAvyD1u8";
const prefix = "K";

bot.on('ready' , function() {
    console.log("I'm ready");
});

bot.on('message' , message =>{
    if(message.content[0] === prefix){
        if(message.content === 'Khello'){
            message.channel.send('you there!');
        }
    }
});


bot.login(token)