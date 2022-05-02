// DiscordContext.js

let {ChannelSchemaV1} = require("../schemas")
let schema = new ChannelSchemaV1()
const Logger = require("@ryanforever/logger")
const logger = new Logger("discord-context", {debug: false})

function DiscordContext(settings = {}) {
    
    if (!settings.data || settings.data == "") logger.warn("WARNING no [data] provided")
    if (!settings.botUsername) logger.warn("WARNING no [botUsername] provided")
    if (!settings.botUserid) logger.warn("WARNING no [botUserid] provided")

    let data = settings.data || { channel: { type: undefined, guild: { name: undefined, id: undefined } }, author: { username: undefined } }
    let botUsername = settings.botUsername
    let botUserid = settings.botUserid
    // console.log(data)
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

    schema.user.id = data.author.id;
    schema.user.name = data.author.usernae
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