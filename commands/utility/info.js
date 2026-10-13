const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('info').setDescription('bot infos!!!'),
	async execute(interaction) {
		await interaction.reply('this bot was made by @violetdoesntexist on github, link: https://github.com/violetdoesntexist/Sealgpt.  if you enjoy the bot, please star it on github and open issues for any problems you have :D');
	},
};