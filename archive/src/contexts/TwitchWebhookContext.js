// TwitchWebhookContext.js


function TwitchWebhookContext(data = { event: {}}) {
    let event = data.event;

    this.id = event.id;
    this.username = event.broadcaster_user_name;
    this.userid = event.broadcaster_user_id;
    this.type = event.type;
    this.timestamp = event.started_a

};

module.exports = TwitchWebhookContext;