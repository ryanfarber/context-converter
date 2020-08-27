var ContextBuilder = require('./index.js');

var twitch = new ContextBuilder.TwitchContext()
var discord = new ContextBuilder.DiscordContext()
var twilio = new ContextBuilder.TwilioContext()
var github = new ContextBuilder.GithubContext()
var frameio = new ContextBuilder.FrameioContext()

console.log(twitch)
console.log(discord)
console.log(twilio)
console.log(github)
console.log(frameio)



