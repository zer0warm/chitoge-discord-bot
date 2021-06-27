const { prefix, token } = require('./config.json');
const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles =
  fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

commandFiles.forEach(name => {
  const command = require(`./commands/${name}`);
  client.commands.set(command.name, command);
});

client.once('ready', () => {
  console.log("I am ready!");
  client.user.setStatus('online');
  console.log(client.user);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) {
    return;
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  if (!client.commands.has(commandName)) {
    return;
  }

  try {
    client.commands.get(commandName).execute(message, args, client.commands);
  } catch (err) {
    console.log('An error occurred while handling the message.');
    console.log(err);
  }

  const author = message.author.tag;
  const server = message.guild.name;
  console.log(`User ${author} from server ${server} said: ${message.content}`);
});

process.on('SIGINT', () => {
  client.user.setStatus('invisible');
  client.destroy();
  console.log('Server exiting...');
});

client.login(token);
