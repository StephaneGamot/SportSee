export default class Performance {
	constructor(data) {
		this.data = data;
	}

	get userId() {
		return this.data.userId;
	}

	get cardio() {
		return this.getPerformanceData(1);
	}

	get energy() {
		return this.getPerformanceData(2);
	}

	get endurance() {
		return this.getPerformanceData(3);
	}

	get strength() {
		return this.getPerformanceData(4);
	}

	get speed() {
		return this.getPerformanceData(5);
	}

	get intensity() {
		return this.getPerformanceData(6);
	}

	getPerformanceData(kind) {
		if (this.data && this.data.data && Array.isArray(this.data.data)) {
			let performanceData = this.data.data.find((d) => d.kind === kind);
			return performanceData ? performanceData.value : null;
		} else {
			console.error("Data is not correctly formatted:", this.data);
			return null;
		}
	}

	toJSON() {
		return {
			userId: this.userId,
			cardio: this.cardio,
			energy: this.energy,
			endurance: this.endurance,
			strength: this.strength,
			speed: this.speed,
			intensity: this.intensity,
		};
	}
}
