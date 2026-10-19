const sealgptLogo = `
      █████████                     ████    █████████  ███████████  ███████████  ⠀⠀⠀⠀⡠⠔⠒⠀⠀⠒⠒⠢⠄⡀
     ███░░░░░███                   ░░███   ███░░░░░███░░███░░░░░███░█░░░███░░░█  ⠀⠀⡠⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⢄
    ░███    ░░░   ██████   ██████   ░███  ███     ░░░  ░███    ░███░   ░███  ░   ⠀⢰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⣄
    ░░█████████  ███░░███ ░░░░░███  ░███ ░███          ░██████████     ░███      ⠀⣌⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠒⠈⠉⡇
     ░░░░░░░░███░███████   ███████  ░███ ░███    █████ ░███░░░░░░      ░███      ⡈⠸⡗⠀⡀⠀⠀⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⡊
     ███    ░███░███░░░   ███░░███  ░███ ░░███  ░░███  ░███            ░███      ⠱⣀⠙⠒⠑⠀⠃⠀⠀⠀⠀⠀⠀⠀⠠⡀⠀⠀⠀⠀⠉⠂
    ░░█████████ ░░██████ ░░████████ █████ ░░█████████  █████           █████     ⠀⠀⠉⠁⠒⠒⠒⠒⠒⠒⠒⠚⠢⢄⡀⠇⠉⠉⠉⠁⠈⠁
     ░░░░░░░░░   ░░░░░░   ░░░░░░░░ ░░░░░   ░░░░░░░░░  ░░░░░           ░░░░░    
                                                                               
                                                                               
                                                                               
`;

console.log(sealgptLogo);
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);

    // Skip if it's a file instead of a folder inside /commands/
    if (!fs.statSync(commandsPath).isDirectory()) continue;

    const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            console.log(`[LOADED] /${command.data.name} (${folder}/${file})`);
            commands.push(command.data.toJSON());
        } else {
            console.log(`[WARNING] Uh Oh :c!! The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

const rest = new REST().setToken(token);

(async () => {
    try {
        console.log(`\n BWAA! Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(Routes.applicationCommands(clientId), { body: commands });

        console.log(` YAYYY BLAP :3 Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
})();
console.log("done :3")