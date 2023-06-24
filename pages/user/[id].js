import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/page.module.css";
import Title from "../../components/title/Title.js";
import DailyActivity from "../../components/dailyActivity/DailyActivity";
import User from "../../models/User";
import Activity from "../../models/Activity";
import Intensity from "../../components/intensity/Intensity";
import Performance from "../../models/Performance";
import Score from "../../components/score/Score";

const UserPage = ({ user, activity, averageSessions, performance }) => {
	console.log("Rendering UserPage"); // Ajoutez cette ligne
	console.log("UserPage props", { user, activity, averageSessions, performance }); // Ajoutez cette ligne
	const router = useRouter();
	const { id } = router.query;

	if (!id || !user || !activity) {
		return <div>Loading...</div>;
	}
	console.log(user);

	let userInstance = new User(user);
	let activityInstance = new Activity(activity);
	let performanceInstance = new Performance(performance);

	return (
		<div className={styles.main}>
			<Title user={userInstance} />
			<DailyActivity activity={activityInstance} />
			<Intensity performance={performanceInstance} />
			<Score user={userInstance} />
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

	if (!userResponse || !userResponse.data || !userResponse.data.userInfos) {
		return {
			props: {
				user: null,
				activity: null,
				performance: null,
			},
		};
	}
	const user = {
		id: userResponse.data.id,
		firstName: userResponse.data.userInfos.firstName,
		lastName: userResponse.data.userInfos.lastName,
		age: userResponse.data.userInfos.age,
		score: userResponse.data.score || null,
		todayScore: userResponse.data.todayScore || null,
		keyData: userResponse.data.keyData,
	};

	const activityResponse = await fetchData(`http://localhost:3002/user/${id}/activity`);
	const activityData = activityResponse.data;
	const activity = {
		userId: activityData.userId,
		sessions: activityData.sessions || [],
	};

	const performanceResponse = await fetchData(`http://localhost:3002/user/${id}/performance`);
	const performanceData = performanceResponse.data;
	const performance = {
		userId: performanceData.userId,
		data: performanceData.data || [],
	};
	console.log(performanceResponse);
	return {
		props: {
			user,
			activity,
			performance,
		},
	};
}

export default UserPage;
