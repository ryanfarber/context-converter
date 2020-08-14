// github-context.js

function GithubContext(input = {}) {
	this.name = "github";
	this.zen = input.zen;
	this.events = input.hook.events
	if (input.hook.events.includes("push")) {
		this.action = "push";
	} else {
		this.action = "other";
	};
	this.repository = {
		name: input.repository.name,
		owner: input.repository.owner.login,
		url: input.repository.url
	};
	this.sender = input.sender.login;
	this.timestamp = input.repository.pushed_at;
}

module.exports = GithubContext