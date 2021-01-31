// TelegramContet.js

let channelSchema = require("../channelContextSchema.js");
let schema = new channelSchema();

// function TelegramContext(data = { from: {}, chat: {}, text: undefined }, botUsername, debug) {
function TelegramContext(settings = {}) {

    if (!settings.data || settings.data == "") console.warn("WARNING no [data] provided");
    if (!settings.botUsername) console.warn("WARNING no [botUsername] provided");
    if (!settings.botUserid) console.warn("WARNING no [botUserid] provided");

    let data = settings.data || { from: {}, chat: {}, text: undefined };
    let botUsername = settings.botUsername;
    let botUserid = settings.botUserid;


    // console.log(data)

    schema.name = "telegram";
    schema.type = "platform";
    schema.timestamp = data.date;
    schema.isMentioned = checkIfMentioned(data.text, botUsername);

    schema.channel.name = "telegram"

    schema.subChannel.id = data.chat.id;
    schema.subChannel.name = data.chat.username;
    schema.subChannel.type = data.chat.type;

    schema.user.id = data.from.id;
    schema.user.name = data.from.username;
    schema.user.firstName = data.from.first_name;
    schema.user.lastName = data.from.last_name;
    schema.user.isBot = data.from.is_bot;

    schema.message.id = data.message_id;
    schema.message.type = data.chat.type;
    schema.message.text = data.text;
    schema.message.timestamp = data.date;

    return schema

};

// helpers
function checkIfMentioned(message, botUsername) {
    if (!botUsername || !message || message == "") return undefined
    botUsername = `@${botUsername}`   // adds the tags in telegram format
    let messageArgs = message.split(" ")  // split message into arguments
    if (messageArgs.includes(botUsername)) return true
    else return false
}

module.exports = TelegramContext