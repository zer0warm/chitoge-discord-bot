const Discord = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Check if Chitoge is alive and how long it took to reach her',
  async execute(message, args) {
    let serverMessage = await message.channel.send(`:ping_pong: | **Pong!**`);
    let diff = serverMessage.createdAt - message.createdAt;
    serverMessage.edit(`:ping_pong: | **Pong!** - Latency: **\`${diff}ms\`**`);
  }
};
