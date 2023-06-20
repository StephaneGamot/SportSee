export default class AverageSessions {
	constructor(data) {
		this.data = data;
	}

	get userId() {
		return this.data.userId;
	}

	get sessions() {
		return this.data.sessions;
	}

	getSession(day) {
		if (this.data && this.data.sessions && Array.isArray(this.data.sessions)) {
			let sessionData = this.data.sessions.find(s => s.day === day);
			return sessionData ? sessionData.sessionLength : null;
		} else {
			console.error('Data is not correctly formatted:', this.data);
			return null;
		}
	}

	toJSON() {
		return {
			userId: this.userId,
			sessions: this.sessions
		};
	}
}
