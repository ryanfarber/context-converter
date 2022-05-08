// TwitchContext.js

let {ChannelSchemaV1} = require("../schemas")
let schema = new ChannelSchemaV1()
const Logger = require("@ryanforever/logger")
const logger = new Logger(__filename, {debug: true})


function TwitchContext(config = {}) {

	if (!config.channel || config.channel == "") logger.warn("WARNING you must provided [channel] data")
	if (!config.userstate || config.userstate == "") logger.warn("WARNING you must provided [userstate] data")
	if (!config.message || config.message == "") logger.warn("WARNING you must provided [message] data")
    if (!config.botUsername) logger.warn("WARNING no [botUsername] provided")
    if (!config.botUserid) logger.warn("WARNING no [botUserid] provided")

    let channel = config.channel
    let userstate = config.userstate || {}
    let message = config.message
    let botUsername = config.botUsername
    let botUserid = config.botUserid

    schema.name = "twitch"
    schema.type = "platform"
    schema.timestamp = userstate['tmi-sent-ts']
    schema.isMentioned = checkIfMentioned(message, botUsername)

    schema.user.id = userstate['user-id']
    schema.user.name = userstate.username
    schema.user.type = userstate['user-type']
    schema.user.isSubscriber = userstate.subscriber


    schema.server.name = channel
    schema.server.id = userstate["room-id"]
    
    schema.subChannel.name = channel
    schema.subChannel.id = userstate["room-id"]

    schema.message.text = message
    schema.message.id = userstate.id
    schema.message.type = (userstate["message-type"] == "whisper") ? "dm" : (userstate["message-type"] == "chat") ? "chat" : undefined

	return schema
}


// CHECK IF MENTIONED // 
function checkIfMentioned(message, botUsername) {
	if (!botUsername) return undefined
    // checks if inputted username string starts with an @, if not it adds one
	botUsername = (botUsername.startsWith("@")) ? botUsername : `@${botUsername}`
	// split message into arguments
    let messageArgs = message.split(" ")  
	if (messageArgs.includes(botUsername)) return true
	else return false
}


module.exports = TwitchContext