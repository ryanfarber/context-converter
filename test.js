let ContextBuilder = require('./index.js')

let discord = new ContextBuilder.DiscordContext()
let twitch = new ContextBuilder.TwitchContext()
let twilio = new ContextBuilder.TwilioContext()
let frameio = new ContextBuilder.FrameioContext()
let ccc = new ContextBuilder.CCCContext()
let telegram = new ContextBuilder.TelegramContext()
let twilioError = new ContextBuilder.TwilioErrorContext()
let imessage = new ContextBuilder.ImessageContext()

console.log(discord)
console.log(twitch)
console.log(twilio)
console.log(frameio)
console.log(ccc)
console.log(telegram)
console.log(twilioError)
console.log(imessage)




