const Client = require ("../../index.js").Client
const { MessageActionRow, MessageButton, MessageEmbed, Modal, TextInputComponent } = require('discord.js'); // useful for slash commands
module.exports.run = async (interaction) => {
    let guild = interaction.guild
    guild.members.fetch(interaction.targetId).then(async member => {
        await member.ban().catch(err => { return interaction.channel.send({ content: `Failed to ban ${member.user.tag} (${err})`, ephemeral: true }) })
        await interaction.reply({ content: `Banned ${member.user.tag}`, ephemeral: true }).catch(e => { return console.log(e) })

    }).catch(err => interaction.reply({ content: `${err}`, ephemeral: true }))
}

module.exports.cmd = {
    name: 'ban',
} // this is the name of the slash command