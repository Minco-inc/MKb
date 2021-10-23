const Events = require("./Events.js");
const SlashCommandHandler = require("./SlashCommandHandler.js");
const DownNotifyHeartbeat = require("./DownNotifyHeartbeat.js");

class Autoload {
	loadAllModules(client) {
		new Events().main(client);
		new SlashCommandHandler().main(client);
		new DownNotifyHeartbeat().startBeating();
	}
}

module.exports = Autoload;
