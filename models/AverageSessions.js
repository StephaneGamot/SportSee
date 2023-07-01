export default class AverageSessions {
	constructor(data) {
		this.data = data;
	}

	get userId() {                // Création accesseurs get qui permettent d'accéder aux propriétés userId 
		return this.data.userId;
	}

	get sessions() {
		return this.data.sessions;
	}

	getSession(day) {             // Je retourne les informations
		if (this.data && this.data.sessions && Array.isArray(this.data.sessions)) { // si data existe, si la valeur passé est dans un tableau
			let sessionData = this.data.sessions.find(s => s.day === day);          // On retourne le 1er élément 
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
