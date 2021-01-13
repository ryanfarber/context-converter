

function channelContextSchema() {

	this.name = undefined
	this.type = undefined
	this.timestamp = undefined
	this.isMentioned = undefined
	this.user = {
		id: undefined,
		name: undefined,
		type: undefined,
		isSubscriber: undefined,
		isAdmin: undefined,
		isBot: undefined
	}
	this.message = {
		id: undefined,
		text: undefined,
		attachments: []
	}
	this.server = {
		id: undefined,
		name: undefined
	}
	this.channnel = {
		id: undefined,
		name: undefined
	};
};

module.exports = channelContextSchema



