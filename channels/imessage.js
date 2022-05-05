// imessage.js


let ContextSchema = require("../schemas").ChannelSchemaV4
const Logger = require("@ryanforever/logger")
const logger = new Logger(__filename, {debug: false})



let example = {
  accountEmail: 'login@ryanfarber.dev',
  content: 'Heyy there',
  is_outbound: false,
  status: 'RECEIVED',
  error_code: null,
  error_message: null,
  message_handle: '2825',
  date_sent: '2022-04-23T08:25:07.731Z',
  date_updated: '2022-04-23T08:25:07.731Z',
  from_number: '+16107336455',
  number: '+16107336455',
  to_number: '+13322570355',
  was_downgraded: '0',
  plan: 'blue',
  media_url: 'https://storage.googleapis.com/inbound-file-store/AdobeStock_222580289.heic',
  message_type: 'group',
  group_id: '586846af-2bd5-4801-9971-4410441339be',
  participants: [ '+16107336455' ]
}




function ImessageContext(input = {}, config = {}) {

	if (!config.botUsername) logger.warn("no [botUsername] provided")
	if (!config.botUserid) logger.warn("no [botUserid] provided")

	let botUsername = config.botUsername
	let botUserid = config.botUserid
	let admins = config.admins
	let mods = config.mods
	
	// let input

	let timestamp = input.date_sent
	let schema = new ContextSchema({
		name: "imessage",
		type: "platform",
		timestamp,
		channel: {
			name: "imessage"
		},
		server: {
			name: input.group_id,
			id: input.group_id,
			type: "group"
		},
		user: {
			name: input.from_number,
			id: input.from_number,
			isAdmin: isAdmin(input.from_number),
			isMod: isMod(input.from_number)
		},
		message: {
			id: input.message_handle,
			text: input.content,
			type: input.message_type,
			timestamp,
			hasFiles: (input.media_url) ? true : false,
			hasMedia: (input.media_url) ? true : false
		}
	})
	if (input.media_url) {
		let obj = {
			name: undefined,
			type: undefined,
			url: input.media_url
		}
		schema.message.media.push(obj)
		schema.message.attachments.push(obj)
	}

	// check if admin
	function isAdmin(user) {
		if (!admins) return undefined
		let match = admins.some(admin => {
			return user.includes(admin)
		})
		return match
	}

	// check if mod
	function isMod(user) {
		if (!mods) return undefined
		let match = mods.some(mod => {
			return user.includes(mod)
		})
		return match
	}

	return schema
}

console.log(new ImessageContext(example))


module.exports = ImessageContext