const { SlashCommandBuilder } = require('discord.js');
const randomResponses = [
    "OMNOMNOM :3, BWAAAAA <3",
    "yummy! thx human :3",
    "mmmmm yyummy feesh.. :P",
    "fishy fish yummy nom",
    " i love you thanks"
];
const randomMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];

module.exports = {
	data: new SlashCommandBuilder().setName('givefish').setDescription('gives fish to seal'),
    async execute(interaction) {
    const randomFishMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];
    await interaction.reply(randomFishMsg);
},
};

