# context-builder

a tool to help interface with multiple chat platforms/applications.

## Supported Platforms
- Discord
- Twitch
- Twilio
- Github
- Transmission
- CarbonCopyCloner
 
```javascript

var ContextBuilder = require('rf-context-builder');

var discord = new ContextBuilder.DiscordContext()
var twitch = new ContextBuilder.TwitchContext()
var twilio = new ContextBuilder.TwilioContext()

console.log(twitch)
console.log(discord)
console.log(twilio)


discord.on("message", (data) => {
	let context = new ContextBuilder.DiscordContext(data, botId)

})

twitch.on("message", (channel, userstate, message, self) => {
	let context = new ContextBuilder.TwitchContext(channel, userstate, message, botUsername)
})


```

## More platforms coming soon

- Trello
- Frame.io