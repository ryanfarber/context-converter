# context-builder

a tool to help interface with multiple chat platforms/applications.

## Supported Platforms
- Discord
- Twitch
- Twilio
 
```javascript

var ContextBuilder = require('./index.js');

var twitch = new ContextBuilder.TwitchContext()
var discord = new ContextBuilder.DiscordContext()
var twilio = new ContextBuilder.TwilioContext()

console.log(twitch)
console.log(discord)
console.log(twilio)

```

## More platforms coming soon

- Trello
- Frame.io
- Transmission
- Trello