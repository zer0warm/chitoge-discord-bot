module.exports = {
  name: 'enlarge',
  description: 'Magnify the user emotes',
  execute(message, args) {
    if (!/^<:.+:[0-9]+>$/.test(args[0])) {
      return;
    }

    let emoji = args[0];
    let id = emoji.slice(emoji.search(/[0-9]+>$/), emoji.length-1);
    const assetURL = `https://cdn.discordapp.com/emojis/${id}.png?v=1`;

    message.channel.send(assetURL).then((m) => {
      console.log(m.content);
    }).catch((e) => console.log(e));
  }
};
