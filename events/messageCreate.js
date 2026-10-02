const { Events } = require('discord.js');
const channelCounters = new Map();
function getRandomInterval(min = 10, max = 15) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomResponses = [
    "aeghhh...",
    "aughhhh",
    "oughh ough ough",
    "GUHH!!",
    "guh",
    "bleh :3",
    "want feesh...",
    "fishy pls",
    "hey its me its seality"
    "wawawawawa",
    "wawa",
    "WA!",
    "guhhhhhhhhhhh",
    "honk",
    "sealie need nom"
];

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;

        const channelId = message.channel.id;
        if (!channelCounters.has(channelId)) {
            channelCounters.set(channelId, {
                count: 0,
                target: getRandomInterval(10, 15)
            });
        }

        const data = channelCounters.get(channelId);
        data.count++;

        if (data.count >= data.target) {
            const randomMsg = randomResponses[Math.floor(Math.random() * randomResponses.length)];
            
            await message.channel.send(randomMsg);

            data.count = 0;
            data.target = getRandomInterval(10, 15);
        }
    },
};