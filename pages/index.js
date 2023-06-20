import React from "react";
import styles from "../styles/page.module.css";
import Title from "../components/title/Title.js";
import DailyActivity from "../components/dailyActivity/DailyActivity";
import TrainingBoxes from "../components/training/TrainingBoxes";
import Nrjs from "../components/nrj/Nrjs";

export default function Home() {
  const id = 18 ;

	return (
		<>
			<div className={styles.main}>
				<Title id={id} /> 
				<DailyActivity className={styles.dailyActivity} userId={id} />
				<Nrjs className={styles.nrjs} id={id}  />
				<TrainingBoxes className={styles.trainingBoxes} userId={id} />
			</div>
		</>
	);
}