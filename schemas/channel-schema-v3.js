// channel-schema-v3.js


function ChannelSchema(d = {}) {
	let channel = d?.channel
	let user = d?.user
	let server = d?.server
	let inlineQuery = d?.inlineQuery
	let subChannel = d?.subChannel
	let message = d?.message

	this.name = d.name
	this.type = d.type
	this.timestamp = d.timestamp
	this.isMentioned = d.isMentioned
	this.channel = {
		name: channel?.name,
		id: channel?.id,
	}

	// i.e. discord server
	this.server = {
		name: server?.name,
		id: server?.id,
		type: server?.type
	}

	// i.e. discord channel/telegram chat
	this.subChannel = {
		name: subChannel?.name,
		id: subChannel?.id,
		type: subChannel?.type
	}

	// user data
	this.user = {
		name: user?.name,
		id: user?.id,
		type: user?.type,
		role: user?.role,
		firstName: user?.firstName,
		lastName: user?.lastName,
		isSubscriber: user?.isSubscriber,
		isAdmin: user?.isAdmin,
		isMod: user?.isMod,
		isBot: user?.isBot,
		role: user?.role
	}

	// actual message text
	this.message = {
		id: message?.id,
		type: message?.type,
		text: message?.text,
		timestamp: message?.timestamp,
		isInlineQueryResponse: message?.isInlineQueryResponse,
		hasPhotos: message?.hasPhotos,
		hasFiles: message?.hasFiles,
		hasMedia: message?.hasMedia,
		attachments: message?.attatchments || [],
		media: message?.media || [],
		photos: message?.photos || [],
		files: message?.files || [],
	}

	this.inlineQuery = {
		id: inlineQuery?.id
	}
}



module.exports = ChannelSchema