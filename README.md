# context-builder

when you want to interface with multiple platforms/applications, but want to have a unified language.


## Supported Platforms
- Discord
- Twitch
- Twilio
- Trello
- Frame.io
- Transmission
- Trello
 
```javascript

var ContextBuilder = require('./index.js');

var twitch = new ContextBuilder.TwitchContext()
var discord = new ContextBuilder.DiscordContext()
var twilio = new ContextBuilder.TwilioContext()

console.log(twitch)
console.log(discord)
console.log(twilio)

```