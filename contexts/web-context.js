// web-context.js

function WebContext(data = {}, settings) {
  // this.settings = settings || {}
  
  this.name = 'web';
  this.type = undefined;
  this.timestamp = data.timestamp || Date.now();
  this.user = {
    name: data.username,
    id: data['user-id'],
    type: undefined,
    isSubscriber: undefined
  };
  this.message = {
    text: data.message_text,
    id: data.message_id
  };
  this.channel = {
    name: undefined
  };
};

module.exports = WebContext