export default class Activity {
	constructor(data) {
		this.data = data;
	}

	get userId() {
		return this.data.userId;
	}

	get day() {
		return this.data.sessions && this.data.sessions.length > 0 ? this.data.sessions[0].day : null;
	} // c'est tableau !!

	get kilogram() {
		return this.data.sessions && this.data.sessions.length > 0 ? this.data.sessions[0].kilogram : null;
	}

	get calories() {
		return this.data.sessions && this.data.sessions.length > 0 ? this.data.sessions[0].calories : null;
	}

	toJSON() {
		return {
			userId: this.userId,
			day: this.day,
			kilogram: this.kilogram,
			calories: this.calories,
		};
	}
}
