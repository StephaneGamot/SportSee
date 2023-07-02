
export const getUser = async (id) => {
	try {
		const response = await fetch(`http://localhost:3002/user/${id}`);
		return response.json();
	} catch (e) {
		console.log(e);
	}
};

export const getUserActivity = async (id) => {
	try {
		const response = await fetch(`http://localhost:3002/user/${id}/activity`);
        console.log("activity a ete fetché")
		return response.json();
	} catch (e) {
		console.log(e);
	}
};

export const getUserAverageSessions = async (id) => {
	try {
		const response = await fetch(`http://localhost:3002/user/${id}/average-sessions`);
		return response.json();
	} catch (e) {
		console.log(e);
	}
};

export const getUserPerformance = async (id) => {
	try {
		const response = await fetch(`http://localhost:3002/user/${id}/performance`);
		return response.json();
	} catch (e) {
		console.log(e);
	}
};