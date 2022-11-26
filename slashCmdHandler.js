const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');
async function globalCommand(Client){
    const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
        type: 1, // 1 = slash command, 2 = user command, 3 = message command
    },
    {
        name: 'ban',
        type: 2,
        defaultMemberPermissions: [PermissionFlagsBits.BanMembers],
    },
    {
        name: 'embed',
        type: 3,
        defaultMemberPermissions: [PermissionFlagsBits.EmbedLinks, PermissionFlagsBits.AttachFiles, PermissionFlagsBits.SendMessages],
    }
]
await Client.application.commands.set(commands)
}
module.exports = { globalCommand }