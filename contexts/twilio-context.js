// twilio context

function TwilioContext(data = {}, settings) {

	this.context_name = 'twilio';
	this.type = "";
	this.timestamp = "";
	this.user = {
		name: "",
		id: ""
	};
	this.message = {
		text: data.content,
		id: data.id
	};

};

module.exports = TwilioContext