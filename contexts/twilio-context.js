// twilio context

function TwilioContext(data = {}, settings) {

	this.name = 'twilio';
	this.type = "sms";
	this.timestamp = "unavailable";
	this.user = {
		name: data.From,
		id: data.MessageSid
	};
	this.message = {
		text: data.Body,
		id: data.MessageSid
	};

};

module.exports = TwilioContext