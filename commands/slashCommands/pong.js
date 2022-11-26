const { MessageActionRow, MessageButton, MessageEmbed, Modal, TextInputComponent } = require('discord.js'); // useful for slash commands
module.exports.run = async (interaction) => {
    interaction.reply({ content: 'Pong!', ephemeral: true }); // ephemeral means only the user who ran the command can see the reply
}

module.exports.cmd = {
    name: 'ping',
} // this is the name of the slash command