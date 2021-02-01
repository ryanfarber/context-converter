// transmission-context.js

function TransmissionContext(input = {}) {
	this.name = "transmission";
	this.timestamp = input.timestamp;
	this.torrentName = input.name;
	this.directory = input.directory;
	this.message = (this.torrentName) ? "Torrent downloaded!" : "Test message";
};

module.exports = TransmissionContext