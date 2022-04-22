module.exports = {
    name: 'typingStart',
    execute(interaction) {
        console.log(`${interaction.user.username} is typing...`);
        interaction.channel.send(`${interaction.user.username} is typing...`);
    },
};