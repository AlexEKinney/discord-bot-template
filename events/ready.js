const Client = require("../index.js").Client
const { globalCommand } = require("../slashCmdHandler")
Client.on('ready', async() => {
    Client.user.setPresence({ activities: [{ name: `with this template discord bot` }], status: 'idle' });
    console.debug(`${Client.user.tag} is now online!`)
    globalCommand(Client)
    console.debug(`Loaded global slash commands!`)
})