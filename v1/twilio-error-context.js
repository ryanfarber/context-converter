// twilio-error-context.js


function TwilioErrorContext(data = {}) {
	let payload = data.payload || {more_info: {}, webhook: {request: {parameters: {}}}}
	// console.log(data)
	if (data.hasOwnProperty("Payload")) {
		payload = JSON.parse(data.Payload)
	}

	this.id = payload.resource_sid;
	this.errorCode = payload.error_code;
	this.errorMsg = payload.more_info.Msg;
	this.endpoint = payload.more_info.url;
	this.user = payload.webhook.request.parameters.From;
	this.timestamp = data.Timestamp
	this.debuggerUrl = "https://www.twilio.com/console/debugger";
};

module.exports = TwilioErrorContext