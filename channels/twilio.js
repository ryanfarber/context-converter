// TwilioContext.js

let {ChannelSchemaV1} = require("../schemas")
let schema = new ChannelSchemaV1()
const Logger = require("@ryanforever/logger")
const logger = new Logger(__filename, {debug: true})


function TwilioContext(data = {}, config = {}) {

	if (!data) 					logger.warn(logs.MISSING_DATA)
	if (!config.botUsername) 	logger.warn(logs.MISSING_BOT_USERNAME)
	if (!config.botUserid) 		logger.warn(logs.MISSING_BOT_USERID)

	let botUsername = config.botUsername
	let botUserid = config.botUserid

	schema.name = "twilio"
	schema.type = "sms"

	schema.timestamp = (data.hasOwnProperty("timestamp")) ? data.timestamp : Date.now()
	schema.user.id = data.From
	schema.user.name = data.From

	schema.message.id = data.MessageSid
	schema.message.text = data.Body

	return schema
}

module.exports = TwilioContext