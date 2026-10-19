const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = { 
	data: new SlashCommandBuilder().setName('info').setDescription('bot infos!!!'),
	async execute(interaction) {
        const button = new ButtonBuilder()
            .setLabel('GitHub Repo!')
            .setURL('https://github.com/violetdoesntexist/Sealgpt')
            .setStyle(ButtonStyle.Link);

        const row = new ActionRowBuilder().addComponents(button);

        const embed = new EmbedBuilder()
            .setThumbnail('https://cdn.hackclub.com/01a15416-00c1-712a-b22e-2d6f072d544a/Picsart_26-10-18_18-41-35-148.jpg')
            .setTitle('SealGPT by Amelia (@violetdoesntexist)')
            .setDescription('If you enjoy the bot, please star it on GitHub and open issues for any problems you have! :D')
            .setColor(0x5865F2);

        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    },
};