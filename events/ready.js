const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`BLAP! Sealgpt is Logged in as ${client.user.tag}`);
	},
};