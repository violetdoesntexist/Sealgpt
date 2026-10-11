const { SlashCommandBuilder } = require('discord.js');
const randomResponses = [
    "https://klipy.com/gifs/seal-clap-4",
    "https://tenor.com/view/seal-seal-dance-kad-kadinhou-sfc-gif-27260805",
    "https://klipy.com/gifs/seal-sealtwt-4",
    "https://klipy.com/gifs/seal-baikal-seal-4"
];
const randomMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];

module.exports = {
	data: new SlashCommandBuilder().setName('gif').setDescription('random seal gif :3'),
    async execute(interaction) {
    const randomSealGif = randomResponses[Math.floor(Math.random() * randomResponses.length)];
    await interaction.reply(randomSealGif);
},
};



