import React, { useState, useEffect } from "react";
import styles from "../styles/page.module.css";
import Title from "../components/title/Title.js";
import DailyActivity from "../components/dailyActivity/DailyActivity";
import ASDuration from "../components/averageSessionDuration/AverageSessionDuration";
import Intensity from "../components/intensity/Intensity";
import Score from "../components/score/Score";
import Nrjs from "../components/nrj/Nrjs";
import User from "../models/User";
import Performance from "../models/Performance";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_PERFORMANCE } from "../data/mock";

export default function Home() {
	const id = 12;

	const [user, setUser] = useState(null);
	const [performance, setPerformance] = useState(null);
	console.log(user);

	useEffect(() => {
		const userData = USER_MAIN_DATA.find((data) => data.id === id);
		if (userData) {
			const score = userData.todayScore !== undefined ? userData.todayScore : userData.score !== undefined ? userData.score : 0;
			userData.score = score;
			userData.todayScore = score; 
			const userInstance = new User(userData);
			setUser(userInstance);
		}
	}, [id]);

	useEffect(() => {
		const performanceData = USER_PERFORMANCE.find((data) => data.userId === id);
		if (performanceData) {
			const performanceInstance = new Performance(performanceData);
			setPerformance(performanceInstance);
		}
	}, [id]);
	if (!user) {
		
		return null; 
	}
	return (
		<>
			<div className={styles.main}>
				<Title user={user} />
				<DailyActivity className={styles.dailyActivity} activityData={USER_ACTIVITY} userId={id} />
				<Nrjs className={styles.nrjs} id={id} />
				<Nrjs className={styles.nrjs} id={id} />
				<div className={styles.trainingBoxes}>
					<ASDuration userId={id} />
					<Intensity performance={performance} userId={id} />
					<Score user={user} />
				</div>
			</div>
		</>
	);
}
