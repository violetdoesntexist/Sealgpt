const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('givefish').setDescription('gives fish to seal'),
	async execute(interaction) {
		await interaction.reply('OMNOMNOM :3, BWAAAAA <3 *hugs you* ');
	},
};