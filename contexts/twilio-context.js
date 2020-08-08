// twilio context

function TwilioContext(data = {}, settings) {

	this.context_name = 'twilio';
	this.type = "sms";
	this.timestamp = "";
	this.user = {
		name: data.From,
		id: data.MessageSID
	};
	this.message = {
		text: data.Body,
		id: data.MessageSID
	};

};

module.exports = TwilioContext