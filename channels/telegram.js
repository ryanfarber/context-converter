// TelegramContet.js

let {channelSchemaV1} = require("../schemas")
let schema = new channelSchemaV1()

// function TelegramContext(data = { from: {}, chat: {}, text: undefined }, botUsername, debug) {
function TelegramContext(settings = {}) {

    if (!settings.data || settings.data == "") console.warn("WARNING no [data] provided");
    if (!settings.botUsername) console.warn("WARNING no [botUsername] provided");
    if (!settings.botUserid) console.warn("WARNING no [botUserid] provided");

    let data = settings.data || { from: {}, chat: {}, message: {chat:{}}, text: undefined };
    let botUsername = settings.botUsername;
    let botUserid = settings.botUserid;

    // console.log(data)
    schema = {
        name: "telegram",
        type: "platform",
        timestamp: data.date,
        isMentioned: checkIfMentioned(data.text, botUsername),
        channel: {
            name: "telegram",
        },
        server: {
            id: data.chat.id || data.message.chat.id,
            name: data.chat?.username || data.chat?.title || data.message?.chat?.username,
            type: data.chat?.type || data.message?.chat?.type,
        },
        subChannel: {
            id: data.chat?.id,
            name: data.chat?.username,
            type: data.chat?.type
        },
        user: {
            id: data.from?.id,
            name: data.from?.username,
            firstName: data.from?.first_name,
            lastName: data.from?.last_name,
            isBot: data.from?.is_bot
        },
        message: {
            id: data.message_id,
            type: data.chat?.type,
            text: data.text,
            timestamp: data.date,
            media: []
        },
        inlineQuery: {
            id: data.inline_query_id
        }
    }
    if (data.inline_query_id) schema.message.isInlineQueryResponse = true
    if (data.hasOwnProperty("photo")) {
        schema.message.hasMedia = true
        schema.message.media.push(data.photo.pop())
    }

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