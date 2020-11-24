// twitch-context.js


function TwitchContext(channel, userstate = {}, message, settings) {
  // if (!channel || !userstate || !message) console.warn("TWITCHCONTEXT: check arguments (channel, userstate, message)")
  
  this.name = 'twitch';
  this.type = userstate["message-type"];
  this.timestamp = userstate['tmi-sent-ts'];
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

module.exports = TwitchContext