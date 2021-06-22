const Discord = require('discord.js');
const { prefix, embedColor } = require('../config.json');

module.exports = {
  name: 'help',
  description: 'Print help message',
  execute(message, args, commandList) {
    let embed = new Discord.MessageEmbed();
    embed.setTitle('List of commands');
    embed.setColor(embedColor);

    commandList.sort((cmdA, cmdB) => (cmdA.name < cmdB.name ? -1 : 1));

    let allCmdDescs = '';
    commandList.forEach(command => {
      allCmdDescs += `\n\n\`${prefix}${command.name}\`\n${command.description}`;
    });

    embed.addField('\u200b', allCmdDescs);
    message.channel.send(embed).then(() => console.log('Sent help message'));
  }
};
