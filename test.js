var ContextBuilder = require('./index.js');

var twilioData = {
	ToCountry: 'US',
	ToState: 'CT',
	SmsMessageSid: 'SM75ec801fb31d63be85550c5063280a89',
	NumMedia: '0',
	ToCity: 'SIMSBURY',
	FromZip: '19442',
	SmsSid: 'SM75ec801fb31d63be85550c5063280a89',
	FromState: 'PA',
	SmsStatus: 'received',
	FromCity: 'NORRISTOWN',
	Body: 'Hey',
	FromCountry: 'US',
	To: '+18607354841',
	ToZip: '06089',
	NumSegments: '1',
	MessageSid: 'SM75ec801fb31d63be85550c5063280a89',
	AccountSid: 'ACa313ac038893797140447ab4b4eb9932',
	From: '+16107336455',
	ApiVersion: '2010-04-01'
}




var twitch = new ContextBuilder.TwitchContext()
var discord = new ContextBuilder.DiscordContext()
var twilio = new ContextBuilder.TwilioContext(twilioData)

console.log(twitch)
console.log(discord)
console.log(twilio)