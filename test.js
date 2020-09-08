var ContextBuilder = require('./index.js');

var twitch = new ContextBuilder.TwitchContext()
var discord = new ContextBuilder.DiscordContext()
var twilio = new ContextBuilder.TwilioContext()
var github = new ContextBuilder.GithubContext()
var frameio = new ContextBuilder.FrameioContext()
var ccc = new ContextBuilder.CCCContext({result: 'Editing Projects LOCAL BACKUP|Macintosh ' +'HD/Users/ryanfarber/Editing ' +'LOCAL|/Volumes/Backups/BACKUP_Editing ' +'Local|8/26/20, 5:52 PM|0:02|Zero KB|Cancelled|0'})

console.log(twitch)
console.log(discord)
console.log(twilio)
console.log(github)
console.log(frameio)
console.log(ccc)



