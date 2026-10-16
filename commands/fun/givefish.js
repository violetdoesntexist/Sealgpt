const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const randomResponses = [
    "OMNOMNOM :3, BWAAAAA <3",
    "yummy! thx human :3",
    "mmmmm yyummy feesh.. :P",
    "fishy fish yummy nom",
    " i love you thanks",
    "FEEEEESH :D",
    "yayyyyy :3"
];

const randomEatGifs = [
    "https://cdn.hackclub.com/01a14682-fb57-7354-bf23-fe0cc85e1a7a/bSv9QwvbkzcV.gif",
    "https://cdn.hackclub.com/01a14682-f954-74d7-afbe-3385d816d20c/jk8gSpmO.gif",
    "https://cdn.hackclub.com/01a14682-f403-7ae9-a18c-303caf3ab53a/Ug20ilPF8u1g7LYx.gif",
    "https://cdn.hackclub.com/01a14682-f163-70bc-9e4a-9ba664d114f2/pO8DZHPM.gif",
    "https://cdn.hackclub.com/01a14682-ef8f-73f0-ac71-7ec414deb0c7/f58dWYXj.gif"
];

const randomMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];

module.exports = {
	data: new SlashCommandBuilder().setName('givefish').setDescription('gives fish to seal'),
    async execute(interaction) {
    const randomFishMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];
    const randomEatGif = randomEatGifs[Math.floor(Math.random() * randomEatGifs.length)];
    
    await interaction.reply();
    console.log("givefish triggered")
},
};

