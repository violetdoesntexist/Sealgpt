const { SlashCommandBuilder } = require('discord.js');
const randomResponses = [
    "https://klipy.com/gifs/seal-clap-4",
    "https://tenor.com/view/seal-seal-dance-kad-kadinhou-sfc-gif-27260805",
    "https://klipy.com/gifs/seal-sealtwt-4",
    "https://klipy.com/gifs/seal-baikal-seal-4",
    "https://klipy.com/gifs/mlem-seal",
    "https://klipy.com/gifs/seal-seal-tongue-out",
    "https://klipy.com/gifs/motya-baikal-seal",
    "https://klipy.com/gifs/yuki-seal",
    "https://klipy.com/gifs/baikal-seal-nerpa-1",
    "https://klipy.com/gifs/baby-seal-dance-groovin",
    "https://klipy.com/gifs/seal-bounce-6",
    "https://klipy.com/gifs/explodes-you-with-my-mind-angry",
    "https://klipy.com/gifs/seals-yo-chan",
    "https://klipy.com/gifs/seal-nerpa-1",
    "https://klipy.com/gifs/cute-seal-facepalms",
    "https://klipy.com/gifs/weddell-seal-seal-yelling",
    "https://klipy.com/gifs/megaweaner-weddell"
];
const randomMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];

module.exports = {
	data: new SlashCommandBuilder().setName('gif').setDescription('random seal gif :3'),
    async execute(interaction) {
    const randomSealGif = randomResponses[Math.floor(Math.random() * randomResponses.length)];
    await interaction.reply(randomSealGif);
},
};



