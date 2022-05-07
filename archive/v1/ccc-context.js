// ccc-context.js

function CCCContext(input = {result: ""}, settings = {}) {

		input = input.result.split("|")

		this.task = input[0]
		this.copyfrom = input[1]
		this.copyto = input[2]
		this.date = input[3]
		this.time = input[4]
		this.datacopied = input[5]
		this.status = input[6]
		this.exitcode = input[7]

		this.path = `\`${this.copyfrom} > ${this.copyto}\``;
		this.copyfromformat = `\`${this.copyfrom}\``;
		this.copytoformat = `\`${this.copyto}\``;

		if (this.status == 'Success') {
			this.message = `**Copy Successful** ✅\n**task**: ${this.task}\n**A**: ${this.copyfromformat}\n**B**: ${this.copytoformat}\n**time elapsed**: ${this.time}\n**data copied**: ${this.datacopied}`;
		} else 
		if (this.status == 'Cancelled') {
			this.message = `**Copy Cancelled** 🚫\n**task**: ${this.task}\n**A**: ${this.copyfromformat}\n**B**: ${this.copytoformat}\n**time elapsed**: ${this.time}\n**data copied**: ${this.datacopied}`;
		};


} // END CCCContext

module.exports = CCCContext