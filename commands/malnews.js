let { embedColor } = require('../config.json');
let Discord = require('discord.js');
let Parser = require('rss-parser');
let parser = new Parser;

function selectNews(feed, amount) {
  let items = [];
  feed.items.slice(0, amount).forEach(item => items.push({
    title: item.title,
    link: item.link,
    date: formatDate(new Date(item.pubDate))
  }));
  return items;
}

function formatDate(date) {
  return date.toLocaleString('en-GB');
}

module.exports = {
  name: 'malnews',
  description: 'Fetch MAL\'s latest 5 news',
  async execute(message, args) {
    let count = 5;
    let arg = args.shift();
    if (/[0-9]+/.test(arg)) {
      count = Number(arg);
    }

    let feed = await parser.parseURL('https://myanimelist.net/rss/news.xml');
    let articles = selectNews(feed, count);
    let embed = new Discord.MessageEmbed();

    embed.setTitle(feed.title);
    embed.setURL(feed.link);
    embed.setColor(embedColor);

    articles.forEach((article, index) => {
      embed.addField(
        `[${index+1}] ${article.date}`,
        `[${article.title}](${article.link})`
      );
    });

    message.channel.send(embed).then(() => console.log('Sent news.'));
  }
};
