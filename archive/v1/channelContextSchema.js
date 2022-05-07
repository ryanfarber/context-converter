

function channelContextSchema() {

	this.name = undefined;
	this.type = undefined;
	this.timestamp = undefined;
	this.isMentioned = undefined;
	this.channel = {
		name: undefined,
		id: undefined,
	};
	// i.e. discord server
	this.server = {
		name: undefined,
		id: undefined,
		type: undefined
	};

	// i.e. discord channel/telegram chat
	this.subChannel = {
		name: undefined,
		id: undefined,
		type: undefined
	};

	this.user = {
		name: undefined,
		id: undefined,
		type: undefined,
		role: undefined,
		firstName: undefined,
		lastName: undefined,
		isSubscriber: undefined,
		isAdmin: undefined,
		isMod: undefined,
		isBot: undefined
	};

	// actual message text
	this.message = {
		id: undefined,
		type: undefined,
		text: undefined,
		attachments: undefined
	};
};

module.exports = channelContextSchema
