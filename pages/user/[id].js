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
import ASDuration from "../../components/averageSessionDuration/AverageSessionDuration";
import AverageSessions from "../../models/AverageSessions";

const UserPage = ({ user, activity, averageSessions, performance }) => {
	const router = useRouter();
	const { id } = router.query;

	if (!id || !user || !activity) {
		return <div>Loading...</div>;
	}
	console.log(user);

	let userInstance = new User(user);
	let activityInstance = new Activity(activity);
	let aSDurationInstance = new AverageSessions(averageSessions);
	let performanceInstance = new Performance(performance);

	return (
		<div className={styles.main}>
			<Title user={userInstance} />
			<DailyActivity activity={activityInstance} />
			<Intensity performance={performanceInstance} />
			<Score user={userInstance} />
			<ASDuration averageSessions={aSDurationInstance} />
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
				averageSessions: null, 
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

	const aSDurationResponse = await fetchData(`http://localhost:3002/user/${id}/average-sessions`);
const aSDurationData = aSDurationResponse.data;

if (!aSDurationData) {
	console.error('aSDurationData is malformed:', aSDurationData);
	return {
		props: {
			user,
			activity,
			performance,
			averageSessions: null, 
		},
	};
}

const aSDuration = {
	userId: aSDurationData.userId,
	sessions: aSDurationData.sessions || [],
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

	return {
		props: {
			user,
			activity,
			performance,
			averageSessions: aSDuration, // Ajoutez cette ligne
		},
	};
}

export default UserPage;
