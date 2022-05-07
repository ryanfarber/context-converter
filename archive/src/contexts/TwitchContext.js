// TwitchContext.js

let channelSchema = require("../channelContextSchema.js");
let schema = new channelSchema();


function TwitchContext(settings = {}) {

	if (!settings.channel || settings.channel == "") console.warn("WARNING you must provided [channel] data");
	if (!settings.userstate || settings.userstate == "") console.warn("WARNING you must provided [userstate] data");
	if (!settings.message || settings.message == "") console.warn("WARNING you must provided [message] data");
    if (!settings.botUsername) console.warn("WARNING no [botUsername] provided");
    if (!settings.botUserid) console.warn("WARNING no [botUserid] provided");

    let channel = settings.channel;
    let userstate = settings.userstate || {};
    let message = settings.message;
    let botUsername = settings.botUsername;
    let botUserid = settings.botUserid;

    schema.name = "twitch";
    schema.type = "platform";
    schema.timestamp = userstate['tmi-sent-ts'];
    schema.isMentioned = checkIfMentioned(message, botUsername);

    schema.user.id = userstate['user-id'];
    schema.user.name = userstate.username;
    schema.user.type = userstate['user-type'];
    schema.user.isSubscriber = userstate.subscriber;


    schema.server.name = channel;
    schema.server.id = userstate["room-id"];
    
    schema.subChannel.name = channel;
    schema.subChannel.id = userstate["room-id"];

    schema.message.text = message;
    schema.message.id = userstate.id;
    schema.message.type = (userstate["message-type"] == "whisper") ? "dm" : (userstate["message-type"] == "chat") ? "chat" : undefined;

	return schema;
}

function checkIfMentioned(message, botUsername) {
	if (!botUsername) return undefined;
	botUsername = (botUsername.startsWith("@")) ? botUsername : `@${botUsername}`;   // checks if inputted username string starts with an @, if not it adds one
	let messageArgs = message.split(" ");  // split message into arguments
	if (messageArgs.includes(botUsername)) return true;
	else return false;
}


module.exports = TwitchContext