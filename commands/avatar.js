const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
	.setName("avatar")
	.setDescription("Get avatar.")
	.addUserOption(opt => opt
		.setName("user")
		.setDescription("select user")
		.setRequired(true)
	),
	execute: (act, client) => {
		act.reply(act.options.getUser("user").avatarURL());
		// TODO Command
	}
}
