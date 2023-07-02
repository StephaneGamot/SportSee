const urlBackEnd = 'http://localhost:3002/app/data.js';
const { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } = require(urlBackEnd);

export const getUser = async (id) => {
    return USER_MAIN_DATA.find(user => user.id === id);
}

export const getUserActivity = async (id) => {
    return USER_ACTIVITY.find(user => user.userId === id);
}

export const getUserAverageSessions = async (id) => {
    return USER_AVERAGE_SESSIONS.find(user => user.userId === id);
}

export const getUserPerformance = async (id) => {
    return USER_PERFORMANCE.find(user => user.userId === id);
}