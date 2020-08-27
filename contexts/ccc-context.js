// ccc-context.js

function CCCContext(input = [], settings = {}) {

	if (settings.debug) console.log(input)

	this.name = 'ccc'
	this.task = input[0]
	this.copyfrom = input[1]
	this.copyto = input[2]
	this.date = input[3]
	this.time = input[4]
	this.datacopied = input[5]
	this.status = input[6]
	this.exitcode = input[7]

	if (this.status == 'Success') {
		this.message = `✅ **Copy Successful**\n**task**: ${this.task}\n**status**: ${this.status}\n**time elapsed**: ${this.time}\n**data copied**: ${this.datacopied}`;
	} else 
	if (this.status == 'Cancelled') {
		this.message = `🚫 **Copy Cancelled**\n**task**: ${this.task}\n**status**: ${this.status}\n**time elapsed**: ${this.time}\n**data copied**: ${this.datacopied}`;
	};

} // END CCCContext

module.exports = CCCContext