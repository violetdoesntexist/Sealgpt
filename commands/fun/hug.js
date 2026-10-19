const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const randomHugGifs = [
    "https://cdn.hackclub.com/01a13679-00ff-7809-bc81-7db51dd33105/YXdnWsEz39PKxoB.gif",
    "https://cdn.hackclub.com/01a13678-fe37-7eca-b680-dbdfde49ab79/rLoYn9CT.gif",
    "https://cdn.hackclub.com/01a1410b-a581-7371-a406-2eb5fb0f375d/ezgif-5e602a5af828e673.gif",
    "https://cdn.hackclub.com/01a13678-facb-7b7e-9387-d9b5334bea31/NaOZXOgbB5dI5PnrZ2e.gif",
    "https://cdn.hackclub.com/01a13678-f9b4-7586-b359-5f77d53a0251/JKLvLO2sGpJp.gif",
    "https://cdn.hackclub.com/01a13678-f7b6-7a4e-84bf-5ffe1514535d/ieEdWGR6nf5it.gif",
    "https://cdn.hackclub.com/01a13678-f585-76b1-970f-06a312519269/bi3DTGxx.gif",
    "https://cdn.hackclub.com/01a13678-f459-716a-8b81-c6ec0a912e2f/AmPlb7J0GXWiHG.gif",
    "https://cdn.hackclub.com/01a13678-f253-7978-85dc-df1c86086143/2fNNZa2l.gif",
    "https://cdn.hackclub.com/01a13678-a77f-75e8-be45-d789f0eeb375/YXdnWsEz39PKxoB.gif"

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
    const randomHugGif = randomHugGifs[Math.floor(Math.random() * randomHugGifs.length)];
    const randomLine = randomLines[Math.floor(Math.random() * randomLines.length)];
    let index = randomHugGifs.indexOf(randomHugGif) +1 ;
    let indexline = randomLines.indexOf(randomLine) +1 ;
    const embed = new EmbedBuilder().setImage(randomHugGif)
        .setTitle(randomLine)
        .setColor('LuminousVividPink')
        .setFooter({ text: `Gif number: ${index} Line number: ${indexline}` });
    await interaction.reply({ embeds: [embed] })
},
};




