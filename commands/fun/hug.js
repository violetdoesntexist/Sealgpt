const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const randomResponses = [
    "https://klipy.com/gifs/seal-sealtwt-2",
    "https://klipy.com/gifs/seal-baikal-seal-3",
    "https://klipy.com/gifs/seal-hug-7",
    "https://klipy.com/gifs/seal-hugging",
    "https://klipy.com/gifs/mistwol-seal-2",
    "https://klipy.com/gifs/seal-kiss-2BY",
    "https://klipy.com/gifs/seal-seal-plush",
    "https://klipy.com/gifs/seal-kiss-kiss-seal",
    "https://klipy.com/gifs/seal-88",
    "https://klipy.com/gifs/seal-sticking-tongue"

];

const randomLines = [
    "BLAP <3",
    "wawawawawa >o<",
    "yayyyy cuddles :3",
    "*hugs silently*",
    "guhh guhhhhh guhhhh",
    "<3",
    "blap bwap :P",
    "oughhh"
];


module.exports = {
	data: new SlashCommandBuilder().setName('hug').setDescription('Seal Hug :3'),
    async execute(interaction) {
    const randomSealGif = randomResponses[Math.floor(Math.random() * randomResponses.length)];
    const randomLine = randomLines[Math.floor(Math.random() * randomLines.length)];
    const embed = new EmbedBuilder().setImage(randomSealGif).setTitle(randomLine;
    await interaction.reply(embed)
},
};




