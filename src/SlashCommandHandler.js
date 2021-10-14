const fs = require("fs");
const DisNotify = require("disnotify");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const { token } = require("../config.json");

let commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

class SlashCommandHandler {
	constructor() {
		this.guildId = "834747912813543445";
	}

	main(client) {
		commandFiles.forEach(f => {
			let cmdOrig = require("../commands/" + f);
			commands.push(cmdOrig.data.toJSON());
			client.on("interactionCreate", interaction => {
				cmdOrig.execute(interaction, client);
			});
		});
		const rest = new REST({ version: '9' }).setToken(token);
		(async () => {
			try {
				if (this.guildId) {
					this.sendNotify("Start Booting...");
					await rest.put(Routes.applicationGuildCommands(client.user.id, this.guildId), {
						body: commands
					});
					this.sendNotify("Booting Complete. (GUILD_SLASH_COMMAND_MODE)");
				} else {
					this.sendNotify("Start Booting...");
					await rest.put(Routes.applicationCommands(client.user.id), {
						body: commands
					});
					this.sendNotify("Booting Complete. (GLOBAL_SLASH_COMMAND_MODE)");
				}
			} catch (e) {
				console.error(e);
				this.sendNotify(e.toString());
			}
		})();
	}

	sendNotify(text) {
		new DisNotify({
			name: "MKbot",
			text: text
		}).send();
	}
}

module.exports = SlashCommandHandler;
