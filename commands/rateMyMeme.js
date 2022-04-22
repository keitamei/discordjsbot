const { SlashCommandBuilder } = require('@discordjs/builders');

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ratemymeme')
        .setDescription('Rates your meme!'),
    async execute(interaction) {
        const randomNumber = randomIntFromInterval(0,10);

        if (randomNumber === 8) {
            await interaction.reply(`i r8 ${randomNumber}/8, gr8 b8 m8`);
        } else {
            await interaction.reply(`${randomNumber}/10`);
        }
    },
};