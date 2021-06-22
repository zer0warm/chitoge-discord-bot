const { prefix } = require('../config.json');

module.exports = {
  name: 'say',
  description: 'Make Chitoge say what you want her to say',
  help: `**Usage:** \`${prefix}say\` \`space\` \`separated\` \`words\``,
  execute(message, args) {
    let reply = args.join(' ') || this.help;
    message.channel.send(reply);
  }
}
