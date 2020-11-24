// discord-context.js


function DiscordContext(data = { channel: { type: undefined, guild: { name: undefined, id: undefined } }, author: { username: undefined } }, botUsername, debug) {
  // this.settings = settings || {};
  
  this.name = "discord";
  this.type = data.channel.type;
  this.timestamp = data.createdTimestamp;
  this.isMentioned = checkIfMentioned(data.content, botUsername)
  this.user = {
    name: data.author.username,
    id: data.author.id,
    type: undefined,
    isSubscriber: undefined
  };
  this.message = {
    text: data.content,
    id: data.id
  };
  if (data.guild) {
    this.server = {
      name: data.channel.guild.name,
      id: data.channel.guild.id
    };
  }
  this.channel = {
    name: data.channel.name,
    id: data.channel.id
  };
  if (this.type == "dm") this.channel.name = "dm"
  if (debug) console.log(data)

};

function checkIfMentioned(message, botUsername) {
  if (!botUsername) return undefined
  botUsername = `<@!${botUsername}>`   // adds the tags that discord adds to user
  let messageArgs = message.split(" ")  // split message into arguments
  if (messageArgs.includes(botUsername)) {
    return true
  } else {
    return false
  }
}

module.exports = checkIfMentioned

module.exports = DiscordContext