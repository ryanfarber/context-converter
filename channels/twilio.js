// TwilioContext.js

let {channelSchemaV1} = require("../schemas")
let schema = new channelSchemaV1()


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