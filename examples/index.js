// index.js

// const fs = require("fs")
// const path = require("path")

// const ignore = ["index.js"]
// const files = fs.readdirSync("./")

// files.forEach(file => {

// 	if (!ignore.includes(file)) {
// 		let name = path.parse(file).name.replace("-example", "")
// 		let filepath = path.resolve("./", file)
// 		module.exports[name] = require(filepath)
// 	}

// })

module.exports = {
	imessage: require("./imessage-example.js")
}


