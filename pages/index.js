import React from "react";
import styles from "../styles/page.module.css";
import Title from "../components/title/Title.js";
import DailyActivity from "../components/dailyActivity/DailyActivity";
import TrainingBoxes from "../components/training/TrainingBoxes";
import Nrjs from "../components/nrj/Nrjs";

export default function Home() {
	return (
		<>
			<div className={styles.main}>
				<Title id={12} />
				<DailyActivity className={styles.dailyActivity} userId={12} />
				<Nrjs className={styles.nrjs} id={12}  />
				<TrainingBoxes className={styles.trainingBoxes} userId={12} />
			</div>
		</>
	);
}
