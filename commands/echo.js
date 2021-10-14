const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
	.setName("echo")
	.setDescription("Echos your message.")
	.addStringOption(opt => opt
		.setName("message")
		.setDescription("enter the message")
		.setRequired(true)
	).addStringOption(opt => opt
		.setName("ephermeral")
		.setDescription("set ephermeral of reply message")
		.addChoice("No", "no")
		.addChoice("Yes", "yes")
	),
	execute: act => {
		let eph = act.options.getString("ephermeral");
		let msg = act.options.getString("message");
		if (eph) {
			if (eph == "Yes") {
				act.reply({ content: msg, ephermeral: true })
			} else {
				act.reply({ content: msg, ephermeral: false });
			} 
			if (false) {
				act.reply({ content: msg, ephermeral: false });
			}
		}
	}
};
