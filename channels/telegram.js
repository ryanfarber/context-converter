// TelegramContet.js

const {ChannelSchemaV1} = require("../schemas")
let schema = new ChannelSchemaV1()
const Logger = require("@ryanforever/logger")
const logger = new Logger(__filename, {debug: true})
const logs = require("../logs.js")

// function TelegramContext(data = { from: {}, chat: {}, text: undefined }, botUsername, debug) {
function TelegramContext(data = {}, config = {}) {

    if (!config.data || config.data == "")  logger.warn(logs.MISSING_DATA)
    if (!config.botUsername)                logger.warn(logs.MISSING_BOT_USERNAME)
    if (!config.botUserid)                  logger.warn(logs.MISSING_BOT_USERID)

    // let data = config.data || { from: {}, chat: {}, message: {chat:{}}, text: undefined }
    let botUsername = config.botUsername
    let botUserid = config.botUserid

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
    // adds the tags in telegram format
    botUsername = `@${botUsername}`
    let messageArgs = message.split(" ") 
    if (messageArgs.includes(botUsername)) return true
    else return false
}

module.exports = TelegramContext