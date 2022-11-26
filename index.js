const discord = require('discord.js')
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();
const chalk = require('chalk');
const token = process.env.DISCORD_TOKEN;

const Client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildVoiceStates,
        discord.GatewayIntentBits.GuildMembers,
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.MessageContent,
        discord.GatewayIntentBits.DirectMessages,

    ],
    allowedMentions: {parse: ['users', 'roles'], repliedUser: true},
})

Client.commands = new discord.Collection();
Client.aliases = new discord.Collection();
Client.events = new discord.Collection();
Client.SlashCmds = new discord.Collection();
module.exports.Client = Client

fs.readdirSync('./events/').forEach(async jsFiles => {
    var jsFiles = fs.readdirSync('./events/').filter(f => f.split(".").pop() === "js");
    if (jsFiles.length < 1) return console.error(chalk.bgRed("There are no events to load! The bot may not function properly."));
    let check = false
    jsFiles.forEach(event => {
        const eventGet = require(`./events/${event}`)
        try {
            Client.events.set(eventGet.name, eventGet)
            if (check == false) {
                console.log(chalk.green(`Loaded ${event} (EVENT)`))
                check = true
            }
        } catch(error) {
            return console.error(error)
        }
    });
});
fs.readdirSync('./commands/').forEach(dir => {

    //in the cmds folder, we gonna check for the category
    fs.readdir(`./commands/${dir}`, (err, files) => {
        if (err) throw err;
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if (jsFiles.length <= 0) {
          console.error(chalk.red("There are no slash commands to load!"));
          return;
        }
        jsFiles.forEach(file => {
            var fileGet = require(`./commands/${dir}/${file}`);
            console.info(chalk.green(`${file} was loaded (COMMAND)`))
            try {
                Client.SlashCmds.set(fileGet.cmd.name, fileGet);

            } catch (err) {
                return console.error(err);
            }
        });
    });
});
Client.login(token);