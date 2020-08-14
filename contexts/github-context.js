// github-context.js

function GithubContext(input = { hook: {}, pusher: {}, repository: { owner: {} }, sender: {}, head_commit: {} }) {
	this.name = "github";
	this.action = "push"
	this.repository = {
		name: input.repository.name,
		owner: input.repository.owner.login,
		url: input.repository.url
	};
	this.pusher = {
		name: input.pusher.name,
		id: input.sender.id
	}
	this.message = input.head_commit.message;
	this.timestamp = input.head_commit.timestamp;
	this.modified = input.head_commit.modified;
}

module.exports = GithubContext