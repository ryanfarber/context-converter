# context-converter

![acdc](https://static.thenounproject.com/png/101677-200.png)

a tool for converting different channel contexts into a unified context

---

***UNDER DEVELOPMENT! NOT FOR PRODUCTION USE***

## Current Supported Platforms
- Discord
- Twitch
- Telegram
- Twilio
- Github
- Transmission
- CarbonCopyCloner
 
```javascript

const ContextConverter = require('context-converter');

const discord = new ContextConverter.DiscordContext()
const twitch = new ContextConverter.TwitchContext()
const twilio = new ContextConverter.TwilioContext()
```

## Example Usage

```javascript

const ContextConverter = require('context-converter');


discordClient.on("message", (data) => {
	let discordBotId = "123456789"
	let context = new ContextConverter.DiscordContext(data, discordBotId)
	consoel.log(context)

})

twitchClient.on("message", (channel, userstate, message, self) => {
	let twitchBotId = "123456789"
	let context = new ContextConverter.TwitchContext(channel, userstate, message, twitchBotId)
	console.log(context)
})
````

## Context Schema

`name` - name of the channel/context (i.e. discord, twitch, telegram, etc)

`user`

`message`

`server`

`channel`
