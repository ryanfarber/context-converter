// twitch-context.js


function TwitchContext(channel, userstate = {}, message, botUsername) {
  // if (!channel || !userstate || !message) console.warn("TWITCHCONTEXT: check arguments (channel, userstate, message)")

  this.name = 'twitch';
  this.type = userstate["message-type"];
  this.timestamp = userstate['tmi-sent-ts'];
  this.isMentioned = checkIfMentioned(message, botUsername);
  this.user = {
    name: userstate.username,
    id: userstate['user-id'],
    type: userstate['user-type'],
    isSubscriber: userstate.subscriber
  };
  this.message = {
    text: message,
    id: userstate.id
  };
  this.channel = {
    name: channel,
    id: userstate["room-id"],
  };
};

function checkIfMentioned(message, botUsername) {
  if (!botUsername) return undefined
  botUsername = (botUsername.startsWith("@")) ? botUsername : `@${botUsername}`   // checks if inputted username string starts with an @, if not it adds one
  let messageArgs = message.split(" ")  // split message into arguments
  if (messageArgs.includes(botUsername)) {
    return true
  } else {
    return false
  }
}

module.exports = TwitchContext