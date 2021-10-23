const request = require("snekfetch");

class DownNotifyHeartbeat {
	constructor() {
		
	}

	startBeating() {
		this.loopCode = setInterval(() => {
			request.get("http://www.minco.kro.kr:53577/1")
			.then(() => {})
			.catch(console.error);
		}, 1000);
	}
}

module.exports = DownNotifyHeartbeat;
