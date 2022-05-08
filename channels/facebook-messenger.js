// facebook messenger context
const path = require("path")
const Logger = require("@ryanforever/logger")
const logger = new Logger(__filename, {debug: false})

let ChannelSchema = require("../schemas").ChannelSchemaV2


function FacebookMessengerContext(data = {}, config = {}) {
    
    if (!data)                  logger.warn(logs.MISSING_DATA)
    if (!config.botUsername)    logger.warn(logs.MISSING_BOT_USERNAME)
    if (!config.botUserid)      logger.warn(logs.MISSING_BOT_USERID)

    data = data?.entry[0]

    let schema = new ChannelSchema({
        name: "facebookMessenger",
        channel: {},
        subChannel: {},
        user: {
            id: data?.messaging[0]?.sender?.id || undefined,
            name: data?.messaging[0]?.sender?.id || undefined
        },
        message: {
            id: data.id,
            type: config?.data?.object || undefined,
            text: data?.messaging[0]?.message?.text || undefined,
            timestamp: data?.messaging[0]?.timestamp || Date.now()
        }
    })

    // CHECK IF MENTIONED //
    function checkIfMentioned(message, botUserid) {
        if (!botUserid) return undefined
        // adds the tags that discord adds to user
        botUserid = `<@!${botUserid}>`
        // split message into arguments
        let messageArgs = message.split(" ")
        if (messageArgs.includes(botUserid)) return true
        else return false
    }

    return schema
}


module.exports = FacebookMessengerContext