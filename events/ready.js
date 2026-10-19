const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`BLAP! Sealgpt is Ready and Logged in as ${client.user.tag} :3 hope you love her`);
	},
};