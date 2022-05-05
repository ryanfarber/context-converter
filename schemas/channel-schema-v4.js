// channel-schema-v4.js

// let ContextSchemaV2 = require("./channel-schema-v2.js")
let ContextSchemaV3 = require("./channel-schema-v3.js")

function ContextSchema(d = {}) {

	let channel = d?.channel
	let user = d?.user
	let server = d?.server
	let inlineQuery = d?.inlineQuery
	let subChannel = d?.subChannel
	let message = d?.message
	this._v = "4.0.0"
	// CHANNEL //
	this.channel = {
		timestamp: d.timestamp,
		name: d.name,
		id: d.id,
		type: d.type,
		serverName: channel?.name,
		serverId: channel?.id,
		serverType: channel?.type,
		serverChannelName: subChannel?.name,
		serverChannelId: subChannel?.id,
		serverChannelType: subChannel?.type,
	}

	// USER //
	this.user = {
		name: user?.name,
		id: user?.id,
		type: user?.type,
		role: user?.role,
		firstName: user?.firstName,
		lastName: user?.lastName,
		isAdmin: user?.isAdmin,
		isSubscriber: user?.isSubscriber,
		isMod: user?.isMod,
		isBot: user?.isBot
	}

	// MESSAGE //
	this.message = {
		id: message?.id,
		type: message?.type,
		text: message?.text,
		timestamp: message?.timestamp,
		hasPhotos: message?.hasPhotos,
		hasFiles: message?.hasFiles,
		hasMedia: message?.hasMedia,
		isInlineQueryResponse: message?.isInlineQueryResponse,
    	inlineQueryId: message?.inlineQueryId,
		attachments: message?.attatchments || [],
		media: message?.media || [],
		photos: message?.photos || [],
		files: message?.files || [],
	}

	this._oldSchemas = {
		v3: new ContextSchemaV3(d),
	}
}













module.exports = ContextSchema