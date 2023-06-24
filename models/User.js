export default class User {
	constructor(data) {
		this.id = data.id;
		this.firstName = data.firstName || data.userInfos.firstName;
		this.lastName = data.lastName || data.userInfos.lastName;
		this.age = data.age || data.userInfos.age;
		this.score = data.score;
		this.todayScore = data.todayScore;
		this.keyData = data.keyData;
		this.calorieCount = data.keyData ? data.keyData.calorieCount : null;
		this.proteinCount = data.keyData ? data.keyData.proteinCount : null;
		this.carbohydrateCount = data.keyData ? data.keyData.carbohydrateCount : null;
		this.lipidCount = data.keyData ? data.keyData.lipidCount : null;
	}
	
}
