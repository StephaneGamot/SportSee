export default class Activity {
    constructor(data) {
        this.userId = data.userId;
        this.sessions = data.sessions ? data.sessions.map(session => ({
            day: session.day,
            kilogram: session.kilogram,
            calories: session.calories
        })) : null;
    }
}
