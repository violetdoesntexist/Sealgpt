const { SlashCommandBuilder } = require('discord.js');
const randomResponses = [
    "OMNOMNOM :3, BWAAAAA <3 *hugs you*",
    "yummy! thx human :3",
    "mmmmm yyummy feesh.. :P",
    "fishy fish yummy nom",
    "*eats* i love you thanks"
];

module.exports = {
    const randomFishMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];
	data: new SlashCommandBuilder().setName('givefish').setDescription('gives fish to seal'),
	async execute(interaction) {
		await interaction.reply(randomFishMsg);
	},
};