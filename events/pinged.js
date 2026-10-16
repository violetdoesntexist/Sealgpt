const { Events } = require('discord.js');

const randomResponses = [
    "aeghhh...",
    "aughhhh",
    "oughh ough ough",
    "GUHH!!",
    "guh",
    "bleh :3",
    "want feesh...",
    "fishy pls",
    "hi im a seal btw",
    "slappy halloween",
    "wawawawawa",
    "wawa",
    "WA!",
    "guhhhhhhhhhhh",
    "honk",
    "sealie need nom",
    "FEEESH!!",
    "blap",
    "blap blap blap",
    "honky christmas and a slappy new year! :3",
    "woof"

];

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;
        if (!message.mentions.has(message.client.user)) return;

        const randomMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];
        
        try {
            await message.channel.send(randomMsg);
        } catch (error) {
            if (error.code !== 50013) {
                console.error(error);
            }
        }
    },
};