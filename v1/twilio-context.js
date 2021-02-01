// twilio context

function TwilioContext(data = {}, settings) {

	this.name = 'twilio';
	this.type = "sms";
	this.timestamp = (data.hasOwnProperty("timestamp")) ? data.timestamp : undefined;
	this.user = {
		name: undefined,
		id: data.From
	};
	this.message = {
		text: data.Body,
		id: data.MessageSid
	};

};

module.exports = TwilioContext