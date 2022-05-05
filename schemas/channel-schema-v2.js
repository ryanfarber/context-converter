// channel-schema-v2

function channelContext(data = {channel: {}, server: {}, subChannel: {}, user: {}, message: {}, inlineQuery: {}}) {
	// data = {channel: {}, server: {}, subChannel: {}, user: {}, message: {}, inlineQuery: {}}

	this.name = data.name || undefined
	this.type = data.type || undefined
	this.timestamp = data.timestamp || undefined
	this.isMentioned = data.isMentioned || undefined

	this.channel = {
		name: data?.channel?.name || undefined,
		id: data?.channel?.id || undefined,
	}

	// i.e. discord server
	this.server = {
		name: data?.server?.name || undefined,
		id: data?.server?.id || undefined,
		type: data?.server?.type || undefined
	}

	// i.e. discord channel/telegram chat
	this.subChannel = {
		name: data?.subChannel?.name || undefined,
		id: data?.subChannel?.id || undefined,
		type: data?.subChannel?.type || undefined
	}

	// user data
	this.user = {
		name: data?.user?.name || undefined,
		id: data?.user?.id || undefined,
		type: data?.user?.type || undefined,
		role: data?.user?.role || undefined,
		firstName: data?.user?.firstName || undefined,
		lastName: data?.user?.lastName || undefined,
		isSubscriber: data?.user?.isSubscriber || undefined,
		isAdmin: data?.user?.isAdmin || undefined,
		isMod: data?.user?.isMod || undefined,
		isBot: data?.user?.isBot || undefined
	}

	// actual message text
	this.message = {
		id: data.message.id || undefined,
		type: data.message.type || undefined,
		text: data.message.text || undefined,
		timestamp: data.message.timestamp || undefined,
		isInlineQueryResponse: data.message.isInlineQueryResponse || undefined,
		hasPhotos: data.message.hasPhotos || undefined,
		hasFiles: data.message.hasFiles || undefined,
		hasMedia: data.message.hasMedia || undefined,
		attachments: data.message.attachments || undefined,
		media: data.message.media || [],
		photos: data.message.photos || [],
		files: data.message.files ||  [],
	}

	this.inlineQuery = {
		id: data?.inlineQuery?.id || undefined
	}

}

module.exports = channelContext

