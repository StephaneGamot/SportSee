export default class User {
	constructor(data) {
		console.log(data);
		this.data = data;
	}

	get id() {
		return this.data.id;
	}

	get firstName() {
		return this.data && this.data.userInfos ? this.data.userInfos.firstName : null;
	}

	get lastName() {
		return this.data && this.data.userInfos ? this.data.userInfos.lastName : null;
	}

	get age() {
		return this.data && this.data.userInfos ? this.data.userInfos.age : null;
	}

	get score() {
		return this.data && this.data.todayScore ? this.data.todayScore : null;
	}

	get calorieCount() {
		return this.data && this.data.keyData ? this.data.keyData.calorieCount : null;
	}

	get proteinCount() {
		return this.data && this.data.keyData ? this.data.keyData.proteinCount : null;
	}

	get carbohydrateCount() {
		return this.data && this.data.keyData ? this.data.keyData.carbohydrateCount : null;
	}

	get lipidCount() {
		return this.data && this.data.keyData ? this.data.keyData.lipidCount : null;
	}

	toJSON() {
		return {
			id: this.id,
			firstName: this.firstName,
			lastName: this.lastName,
			age: this.age,
			score: this.score,
			calorieCount: this.calorieCount,
			proteinCount: this.proteinCount,
			carbohydrateCount: this.carbohydrateCount,
			lipidCount: this.lipidCount,
		};
	}
}
