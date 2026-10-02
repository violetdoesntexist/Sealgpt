const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('ping').setDescription('pings bot!'),
	async execute(interaction) {
		await interaction.reply('OUGHHHH!!');
	},
};