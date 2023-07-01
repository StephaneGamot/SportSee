export default class Activity {
    constructor(data) {
        this.userId = data.userId;                                        // J'initialise la propriété userId de l'objet data
        this.sessions = data.sessions ? data.sessions.map(session => ({   // Ternaire  si pas null alors j'initialise la propriété sessions 
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories
        })) : null;
    }
}
