const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
	.setName("createguild")
	.setDescription("."),
	execute: async (act, client) => {
		let guild = await client.guilds.create("Example", {
			channels: {
				id: 1,
				type: "text",
				name: "general"
			}
		});
		// let channel = await
		console.log(guild.channels);
		let invite = await channel.createInvite({ maxAge: 0, unique: true, reason: "Inviting" });
		act.reply(invite);
		// TODO Command
	}
}
