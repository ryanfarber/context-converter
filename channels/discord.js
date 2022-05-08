// DiscordContext.js

let {ChannelSchemaV1} = require("../schemas")
let schema = new ChannelSchemaV1()
const logs = require("../logs.js")
const Logger = require("@ryanforever/logger")
const logger = new Logger("discord", {debug: false})

function DiscordContext(data = {}, config = {}) {
    
    if (!config.data || config.data == "") logger.warn(logs.MISSING_DATA)
    if (!config.botUsername) logger.warn(logs.MISSING_BOT_USERNAME)
    if (!config.botUserid) logger.warn(logs.MISSING_BOT_USERID)

    // let data = config.data || { channel: { type: undefined, guild: { name: undefined, id: undefined } }, author: { username: undefined } }
    let botUsername = config.botUsername
    let botUserid = config.botUserid

    schema.name = "discord"
    schema.type = "platform"
    schema.timestamp = data.createdTimestamp
    schema.isMentioned = checkIfMentioned(data.content, botUserid)

    schema.channel.name = "discord"

    if (data.guild) {
        schema.server.id = data.channel.guild.id,
        schema.server.name = data.channel.guild.name
    }

    schema.subChannel.id = data.channel.id
    schema.subChannel.name = data.channel.name
    schema.subChannel.type = data.channel.type

    schema.user.id = data.author.id
    schema.user.name = data.author.username
    schema.user.isBot = data.author.bot

    schema.message.id = data.id
    schema.message.type = (data.channel.type) ? data.channel.type : ""
    schema.message.text = data.content

    return schema

};

// CHECK IF MENTIONED // check if bot is mentioned
function checkIfMentioned(message, botUserid) {
    if (!botUserid) return undefined;

    botUserid1 = `<@!${botUserid}>`   // adds the tags that discord adds to user
    botUserid2 = `<@${botUserid}>`
    let messageArgs = message.split(" ")  // split message into arguments
    if (messageArgs.includes(botUserid1) || messageArgs.includes(botUserid2)) return true
    else return false
};


module.exports = DiscordContext