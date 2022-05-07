# context-converter

![acdc](https://static.thenounproject.com/png/101677-200.png)

a tool for converting different channel contexts into a unified context

---

***UNDER DEVELOPMENT! NOT FOR PRODUCTION USE***

## Current Supported Platforms
- Discord
- Facebook Messenger
- iMessage
- Telegram
- Twilio
- Twitch

```javascript
const ContextConverter = require("@ryanforever/context-converter")

const discord = new ContextConverter.DiscordContext()
```

## Example Usage

```javascript
const { DiscordContext, TwitchContext } = require("@ryanforever/context-converter")

discordClient.on("message", (data) => {
	let discordBotId = "123456789"
	let context = new DiscordContext(data, discordBotId)
	console.log(context)

})

twitchClient.on("message", (channel, userstate, message, self) => {
	let twitchBotId = "123456789"
	let context = new TwitchContext(channel, userstate, message, twitchBotId)
	console.log(context)
})
````
