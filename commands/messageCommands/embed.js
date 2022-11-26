const { MessageActionRow, ButtonBuilder, EmbedBuilder, Modal, TextInputComponent } = require('discord.js'); // useful for slash commands
module.exports.run = async (interaction) => {
    const channel = interaction.channel
channel.messages.fetch(interaction.targetId)
  .then(message => {
    const embed = new EmbedBuilder()
    .setTitle(`Embed by ${interaction.user.tag}`)
    .setDescription(message.content)
    .setTimestamp()
    .setColor('ffffff')
    return interaction.reply ({ embeds: [embed], ephemeral: true })

  })
  .catch(console.error);
}

module.exports.cmd = {
    name: 'embed',
} // this is the name of the slash command