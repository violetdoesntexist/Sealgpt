const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const randomGifList = [
    "https://cdn.hackclub.com/01a14120-2d10-760e-a68c-c7d2df1481dc/QuoiIdbg.gif",
    "https://cdn.hackclub.com/01a14120-2c20-77e5-acd2-dd14df55233c/Kf5OwQQtq5V3W9XfLb.gif",
    "https://cdn.hackclub.com/01a14120-2b20-7c11-a749-578766b9f5cb/seal-seal-dance.gif",
    "https://cdn.hackclub.com/01a14120-2886-7708-b7dd-baa5d0845f5a/TPuxTImn.gif",
    "https://cdn.hackclub.com/01a14120-26ff-7e2a-8564-890cea9ef745/XA3Ynp9FFvkv8no0aHjN.gif",
    "https://cdn.hackclub.com/01a14120-25cf-7e2b-9b6a-d54194858367/ToIz2uxZ.gif",
    "https://cdn.hackclub.com/01a14120-24ee-7600-bca6-9c21c95e34b8/lgGAvCpPQkrsXzg6Tb.gif",
    "https://cdn.hackclub.com/01a14120-2441-703e-a82c-6baa122b460d/Ndz7pPJRnGaqiZWVx.gif",
    "https://cdn.hackclub.com/01a14120-224b-7ef9-8c52-09891dfacaf1/j8uyBkKc3PXR.gif",
    "https://cdn.hackclub.com/01a14120-2153-7165-a318-a952efe90d03/H40zU8vnhUkE.gif",
    "https://cdn.hackclub.com/01a14120-2021-72fd-96a5-490ee32286a4/uOy9BcaD9dh0htgEfzU.gif",
    "https://cdn.hackclub.com/01a14120-1dab-7912-8c5b-113693f150f9/IqJZSD7S.gif",
    "https://cdn.hackclub.com/01a14120-1c86-7573-b265-129431ed974e/vFnKD77Z4O0MfMVjf.gif",
    "https://cdn.hackclub.com/01a14120-1a46-759f-85ce-f51771c4b02d/CgacvMZJmDe7.gif",
    "https://cdn.hackclub.com/01a14120-165b-7706-9ecc-ef419ab6f8c0/23MPHPXcGLwdrQdy.gif"
];
const randomMsg = randomGifList[Math.floor(Math.random() * randomGifList.length)];

module.exports = {
	data: new SlashCommandBuilder().setName('gif').setDescription('random seal gif :3'),
    async execute(interaction) {
    const randomSealGif = randomGifList[Math.floor(Math.random() * randomGifList.length)];
    index = randomGifList.indexOf(randomSealGif) + 1 ;
    const embed = new EmbedBuilder().setImage(randomSealGif).setTitle("Heres your seal gif!:").setColor("Purple").setFooter({ text: `Gif number: ${index}` });
    await interaction.reply({ embeds: [embed] });
    console.log("gif triggered")
},
};



