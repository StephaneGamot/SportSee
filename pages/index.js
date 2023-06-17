import React, { useState, useEffect } from "react";
import styles from "../styles/page.module.css";
import { USER_MAIN_DATA } from "../data/mock";
import DailyActivity from "../components/dailyActivity/DailyActivity";
import TrainingBoxes from "../components/training/TrainingBoxes";
import Nrjs from '../components/nrj/Nrjs'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';




export default function Home() {
	const [firstName, setFirstName] = useState();
	const [userId, setUserId] = useState();

	useEffect(() => {
		const user = USER_MAIN_DATA.find((user) => user.id === userId); // Pour trouvez l'utilisateur avec l'ID actuellement sélectionné.
		if (user) {
			setFirstName(user.userInfos.firstName); // Mets à jour le prénom de l'utilisateur.
		}
	}, [userId]); // Mets à jour le prénom chaque fois que l'ID de l'utilisateur change.

	return (
    <>
    <div className={styles.main}>
    <div className={styles.title}>
      <h1 className={styles.h1}>Bonjour <span className={styles.firstName}>{firstName}</span></h1>
      <h2 className={styles.h2}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2></div>
      <DailyActivity className={styles.dailyActivity} userId={12}/>
      <Nrjs className={styles.nrjs} />
      <TrainingBoxes className={styles.trainingBoxes} userId={12} />
    </div>
  </>
	);
}
