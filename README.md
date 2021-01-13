# context-converter

a tool for converting different channel contexts into a unified context

## Supported Platforms
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

## example usage

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
})
````

## context schema

`name` - name of the channel/context (i.e. discord, twitch, telegram, etc)
`user`
`message`
`server`
`channel`
