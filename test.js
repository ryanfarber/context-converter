var ContextBuilder = require('./index.js');

var discord = new ContextBuilder.DiscordContext()
var twitch = new ContextBuilder.TwitchContext()
var twilio = new ContextBuilder.TwilioContext()
var web = new ContextBuilder.WebContext()
var github = new ContextBuilder.GithubContext()
var frameio = new ContextBuilder.FrameioContext()
var ccc = new ContextBuilder.CCCContext()
var telegram = new ContextBuilder.TelegramContext()

// console.log(discord)
// console.log(twitch)
// console.log(twilio)
// console.log(web)
// console.log(github)
// console.log(frameio)
// console.log(ccc)
console.log(telegram)
