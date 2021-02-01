// TwilioContext.js

let channelSchema = require("../channelContextSchema.js");
let schema = new channelSchema();


function TwilioContext(settings = {}) {

	if (!settings.data || settings.data == "") console.warn("WARNING no [data] provided");
	if (!settings.botUsername) console.warn("WARNING no [botUsername] provided");
	if (!settings.botUserid) console.warn("WARNING no [botUserid] provided");

	let data = settings.data || {};
	let botUsername = settings.botUsername;
	let botUserid = settings.botUserid;

	schema.name = "twilio"
	schema.type = "sms"

	schema.timestamp = (data.hasOwnProperty("timestamp")) ? data.timestamp : Date.now();
	schema.user.id = data.From
	schema.user.name = data.From

	schema.message.id = data.MessageSid
	schema.message.text = data.Body

	return schema;

};

module.exports = TwilioContext