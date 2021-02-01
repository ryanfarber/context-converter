// DiscordContext.js

let channelSchema = require("../channelContextSchema.js");
let schema = new channelSchema();

function DiscordContext(settings = {}) {

    if (!settings.data || settings.data == "") console.warn("WARNING no [data] provided");
    if (!settings.botUsername) console.warn("WARNING no [botUsername] provided");
    if (!settings.botUserid) console.warn("WARNING no [botUserid] provided");

    let data = settings.data || { channel: { type: undefined, guild: { name: undefined, id: undefined } }, author: { username: undefined } };
    let botUsername = settings.botUsername;
    let botUserid = settings.botUserid;

    schema.name = "discord";
    schema.type = "platform"
    schema.timestamp = data.date;
    schema.isMentioned = checkIfMentioned(data.content, botUsername);

    schema.channel.name = "discord"

    if (data.guild) {
        schema.server.id = data.channel.guild.id,
        schema.server.name = data.channel.guild.name
    };

    schema.subChannel.id = data.channel.id;
    schema.subChannel.name = data.channel.name;
    schema.subChannel.type = data.channel.type;

    schema.user.id = data.author.id;
    schema.user.name = data.author.username;
    schema.user.isBot = data.author.bot;

    schema.message.id = data.id;
    schema.message.type = (data.channel.type) ? data.channel.type : ""
    schema.message.text = data.content;

    return schema

};

// helpers
function checkIfMentioned(message, botUserid) {
    if (!botUserid) return undefined;

    botUserid = `<@!${botUserid}>`;   // adds the tags that discord adds to user
    let messageArgs = message.split(" ");  // split message into arguments
    if (messageArgs.includes(botUserid)) return true;
    else return false;
};


module.exports = DiscordContext