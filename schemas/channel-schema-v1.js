// channel schema v1

function channelContext() {

	this.name = undefined
	this.type = undefined
	this.timestamp = undefined
	this.isMentioned = undefined
	this.channel = {
		name: undefined,
		id: undefined,
	}
	this.inlineQuery = {
		id: undefined
	}

	// i.e. discord server
	this.server = {
		name: undefined,
		id: undefined,
		type: undefined
	}

	// i.e. discord channel/telegram chat
	this.subChannel = {
		name: undefined,
		id: undefined,
		type: undefined
	}

	// user data
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
	}

	// actual message text
	this.message = {
		id: undefined,
		type: undefined,
		text: undefined,
		attachments: undefined,
		timestamp: undefined,
		isInlineQueryResponse: undefined,
		hasPhotos: undefined,
		hasFiles: undefined,
		hasMedia: undefined,
		media: [],
		photos: [],
		files: [],
	}

}

module.exports = channelContext

