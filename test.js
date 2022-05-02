var ContextBuilder = require('./index.js');

var discord = new ContextBuilder.DiscordContext()
var twitch = new ContextBuilder.TwitchContext()
var twilio = new ContextBuilder.TwilioContext()
var frameio = new ContextBuilder.FrameioContext()
var ccc = new ContextBuilder.CCCContext()
var telegram = new ContextBuilder.TelegramContext()
var twilioError = new ContextBuilder.TwilioErrorContext()

console.log(discord)
// console.log(twitch)
// console.log(twilio)
// console.log(web)
// console.log(github)
// console.log(frameio)
// console.log(ccc)
// console.log(telegram)
// console.log(twilioError)
