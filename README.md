# context-builder

when you want to interface with multiple platforms/applications, but want to have a unified language.


## Supported Platforms
- Discord
- Twitch
- Twilio
- Trello
 
```javascript

const ContextBuilder = require('@surfingpikachu/context-builder');

const Build = new ContextBuilder({debug: false})

var context = Build.TwitchContext(data)

console.log(context)
```