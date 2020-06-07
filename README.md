# context-builder

when you want to interface with multiple platforms/applications, but want to have a unified language.


## Supported Platforms
- Discord
- Twitch
- Twilio
- Trello
 
```javascript
const Context = require('@surfingpikachu/context-builder');

const context = new Context({debug: false}).TwitchContext()

```