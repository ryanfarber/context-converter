// imessage.js

let ContextSchema = require("../schemas").ChannelSchemaV4
const Logger = require("@ryanforever/logger")
const logger = new Logger(__filename, {debug: true})
const example = require("../examples").imessage
const logs = require("../logs.js")



function ImessageContext(data = {}, config = {}) {

	if (!config.botUsername) 	logger.warn(logs.MISSING_BOT_USERNAME)
	if (!config.botUserid) 		logger.warn(logs.MISSING_BOT_USERID)

	let botUsername = config.botUsername
	let botUserid = config.botUserid
	let admins = config.admins
	let mods = config.mods
	let timestamp = data.date_sent

	let schema = new ContextSchema({
		name: "imessage",
		type: "platform",
		timestamp,
		channel: {
			name: "imessage"
		},
		server: {
			name: data.group_id,
			id: data.group_id,
			type: "group"
		},
		user: {
			name: data.from_number,
			id: data.from_number,
			isAdmin: isAdmin(data.from_number),
			isMod: isMod(data.from_number)
		},
		message: {
			id: data.message_handle,
			text: data.content,
			type: data.message_type,
			timestamp,
			hasFiles: (data.media_url) ? true : false,
			hasMedia: (data.media_url) ? true : false
		}
	})

	if (data.media_url) {
		let obj = {
			name: undefined,
			type: undefined,
			url: data.media_url
		}
		schema.message.media.push(obj)
		schema.message.attachments.push(obj)
	}

	// IS ADMING // check if admin
	function isAdmin(user) {
		if (!admins) return undefined
		let match = admins.some(admin => user.includes(admin))
		return match
	}

	// IS MOD // check if mod
	function isMod(user) {
		if (!mods) return undefined
		let match = mods.some(mod => user.includes(mod))
		return match
	}

	return schema
}



module.exports = ImessageContext