const Discord = require("discord.js");
const DisNotify = require("disnotify");

const { token } = require("../config.json");
const { version } = require("../package.json");

const Autoload = require("./Autoload.js");

class Main {
	constructor() {
		this.client = new Discord.Client({ intents: new Discord.Intents(32767) });
		this.ready();
	}

	ready() {
		this.client.on("ready", () => {
			console.log("Ready!");
			let notify = new DisNotify({
				name: "MKb Node.js",
				text: "MKb v" + version + " Ready!"
			});
			notify.send();
		});

		let auto = new Autoload();
		auto.loadAllModules(this.client);
	}

	login() {
		this.client.login(token);
	}
}

module.exports = Main;
