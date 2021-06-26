const answersBank = [
  'Seems legit',
  'Absolutely no',
  'Maybe',
  'Ask again later'
];

module.exports = {
  name: '8ball',
  description: 'Make a prophecy about the thing get asked',
  execute(message, args) {
    let i = Math.floor(Math.random() * answersBank.length);
    message.channel.send(answersBank[i]);
  }
};
