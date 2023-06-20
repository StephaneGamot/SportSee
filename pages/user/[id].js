import React from "react";
import styles from "../../styles/page.module.css";
import Title from "../../components/title/Title.js";
import DailyActivity from "../../components/dailyActivity/DailyActivity";
import TrainingBoxes from "../../components/training/TrainingBoxes";
import Nrjs from "../../components/nrj/Nrjs";
import User from "../../models/User";
import Activity from "../../models/Activity";
import AverageSessions from "../../models/AverageSessions";
import Performance from "../../models/Performance";

const UserPage = ({ user, activity, averageSessions, performance }) => {
	return (
		<div className={styles.main}>
			<Title user={user} />
			<DailyActivity sessions={activity.sessions} />
			<Nrjs keyData={user.keyData} />
		</div>
	);
};

export async function getServerSideProps(context) {
	const { id } = context.params;

	const fetchData = async (url) => {
		return fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Data fetch failed");
				}
				return response.json();
			})
			.catch((error) => {
				console.error(error);
				return null;
			});
	};

	const userResponse = await fetchData(`http://localhost:3002/user/${id}`);
	const user = userResponse && userResponse.id ? new User(userResponse) : null;
	console.log

	const activityResponse = await fetchData(`http://localhost:3002/user/${id}/activity`);
	const activity = activityResponse && activityResponse.userId ? new Activity(activityResponse) : null;

	const averageSessionsResponse = await fetchData(`http://localhost:3002/user/${id}/average-sessions`);
	const averageSessions = averageSessionsResponse && averageSessionsResponse.userId ? new AverageSessions(averageSessionsResponse) : null;

	const performanceResponse = await fetchData(`http://localhost:3002/user/${id}/performance`);
	const performance = performanceResponse && performanceResponse.userId ? new Performance(performanceResponse) : null;

	return {
		props: {
			user: user ? user.toJSON() : {},
			activity: activity ? activity.toJSON() : {},
			averageSessions: averageSessions ? averageSessions.toJSON() : {},
			performance: performance ? performance.toJSON() : {},
		},
	};
}

export default UserPage;
