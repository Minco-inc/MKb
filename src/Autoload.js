const Events = require("./Events.js");
const SlashCommandHandler = require("./SlashCommandHandler.js");

class Autoload {
	loadAllModules(client) {
		new Events().main(client);
		new SlashCommandHandler().main(client);
	}
}

module.exports = Autoload;
