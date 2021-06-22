module.exports = {
  name: 'choose',
  description: 'Randomly choose between options',
  execute(message, args) {
    let choice = args[Math.floor(Math.random() * args.length)];
    choice = choice.replaceAll('`', '');
    message.channel.send(`:point_right: \`${choice}\``);
  }
};
