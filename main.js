const { Client } = require('discord.js');
const client = new Client();

const config = require("./config.json")

const prefix = "f "

client.login(config.token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === prefix + 'K2A')     msg.channel.send('2 7 Sevran');
    if (msg.content === prefix + 'Lorenzo') msg.channel.send('Ceeeee geeeenre');
    if (msg.content === prefix + 'B2O')     msg.channel.send('La chicha ne s\'allume pas sans charbon');
    if (msg.content === prefix + 'jtm')     msg.channel.send({ files: ["./images/jtm.jpg"] })
    if (msg.content === prefix + 'ademo')   msg.channel.send({ files: ["./images/cou.png"] })
    if (msg.content === prefix + 'SCH')     msg.channel.send({ files: ["./images/sch.jpg"] })
    if (msg.content === prefix + 'Tupac')   msg.channel.send({ files: ["./images/tupac.jpg"] });
});
