// facebook messenger context
const path = require("path");
const Logger = require("rf-logger");
const logger = new Logger(path.parse(__filename).name);

let channelSchema = require("../channelContextSchema_V2.js");
function FacebookMessengerContext(settings = {}) {
    
    if (!settings.data || settings.data == "") console.warn("WARNING no [data] provided");
    if (!settings.botUsername) console.warn("WARNING no [botUsername] provided");
    if (!settings.botUserid) console.warn("WARNING no [botUserid] provided");

    let data = settings.data.entry[0]
    // logger.log(JSON.stringify(data, null, 2))
    // logger.log(data.messaging)

    let schema = new channelSchema({
        name: "facebookMessenger",
        channel: {},
        subChannel: {},
        user: {
            id: data?.messaging[0]?.sender?.id || undefined,
            name: data?.messaging[0]?.sender?.id || undefined
        },
        message: {
            id: data.id,
            type: settings?.data?.object || undefined,
            text: data?.messaging[0]?.message?.text || undefined,
            timestamp: data?.messaging[0]?.timestamp || Date.now()
        }
    })

    console.log(schema)

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


module.exports = FacebookMessengerContext