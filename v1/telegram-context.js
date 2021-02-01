// telegram-context


function TelegramContext(data = { from: {}, chat: {}, text: undefined }, botUsername, debug) {
  
  this.name = "telegram";
  this.type = data.chat.type;
  this.timestamp = data.date;
  this.isMentioned = undefined
  this.user = {
    name: data.from.username,
    id: data.from.id,
    type: undefined,
    isSubscriber: undefined
  };
  this.message = {
    text: data.text,
    id: data.message_id
  };
  if (data.guild) {
    this.server = {
      name: data.channel.guild.name,
      id: data.channel.guild.id
    };
  }
  this.channel = {
    name: data.chat.type,
    id: data.chat.id
  };
  // if (this.type == "dm") this.channel.name = "dm"
  if (debug) console.log(data)

};


module.exports = TelegramContext