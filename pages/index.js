import React, { useState, useEffect } from "react";
import styles from "../styles/page.module.css";
import Title from "../components/title/Title.js";
import DailyActivity from "../components/dailyActivity/DailyActivity";
import ASDuration from "../components/averageSessionDuration/AverageSessionDuration";
import Intensity from "../components/intensity/Intensity";
import Score from "../components/score/Score";
import Energies from "../components/energie/Energies";
import User from "../models/User";
import Performance from "../models/Performance";
import AverageSessions from "../models/AverageSessions";
import Activity from "../models/Activity";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_PERFORMANCE, USER_AVERAGE_SESSIONS } from "../data/mock";
import { useRouter } from 'next/router';

export default function Home() {
	const router = useRouter();                                      // J'initialise le routeur Next.js qui me permet de naviguer entre différentes pages.
	const id = 18;                                                   // Je choisis le 18 mais il existe le 12
	const [user, setUser] = useState(null);                          // je créer une variable que j'utilise pour stocker les données de l'utilisateur
	const [performance, setPerformance] = useState(null);            // je créer une variable que j'utilise pour stocker les données de performance
	const [averageSessions, setAverageSessions] = useState(null);    // je créer une variable que j'utilise pour stocker les données de sessions moyenne
	const [activity, setActivity] = useState(null);                  // je créer une variable que j'utilise pour stocker les données d'activitées

	useEffect(() => {
		if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === "false") {     //  Je l'utilise pour rediriger vers /user/[id].js si la variable d'environnement NEXT_PUBLIC_USE_MOCK_DATA est définie sur 'false'.
			router.push(`/user/${id}`);
		}
	});

	useEffect(() => {
		const userData = USER_MAIN_DATA.find((data) => data.id === id);   // Je récupère les données de l’utilisateur des datas mockés
		if (userData) {                                                   // Pour récuperer le score de l'utilisateur (si défini) ou 0 si non défini
			const score = userData.todayScore !== undefined ? userData.todayScore : userData.score !== undefined ? userData.score : 0;
			const keyData = userData.keyData;                             // Je récupère les données des calories, proteines, lipides, glucides
			userData.score = score;                                       // Je récupère les données du score 
			userData.todayScore = score;                                 
			userData.keyData = keyData;
			const userInstance = new User(userData);                      // Je crée une nouvelle instance de l'utilisateur 
			setUser(userInstance);                                        // Je mets à jour l'état de l'utilisateur avec l'instance de l'utilisateur
		}
	}, [id]);                                                             // Il s'exécutera chaque fois que la valeur de id changera.

	useEffect(() => {
		const activityData = USER_ACTIVITY.find((data) => data.userId === id); // Je récupère les données des activités des datas mockés
		if (activityData) {                                                    // Si les données d'activité ont été trouvées
			const activityInstance = new Activity(activityData);               // Création d'une nouvelle instance d'activité
			setActivity(activityInstance);                                     // Mise à jour de l'état de l'activité avec l'instance d'activité
		}
	}, [id]);                                                                  // Il s'exécutera chaque fois que la valeur de id changera.

	useEffect(() => {
		const performanceData = USER_PERFORMANCE.find((data) => data.userId === id);// Je récupère les données des performances des datas mockés
		if (performanceData) {                                                      // Si les données performance ont été trouvées
			const performanceInstance = new Performance(performanceData);           // Création d'une nouvelle instance des performances
			setPerformance(performanceInstance);                                    // Mise à jour de l'état de performance avec l'instance de performance
		}
	}, [id]);                                                                       // Il s'exécutera chaque fois que la valeur de id changera.

	useEffect(() => {
		const averageSessionsData = USER_AVERAGE_SESSIONS.find((data) => data.userId === id); // Je récupère les données moyenne des sessions des datas mockés
		if (averageSessionsData) {                                                            // Si les données moyenne des sessions ont été trouvées
			const averageSessionsDataInstance = new AverageSessions(averageSessionsData);     // Création d'une nouvelle instance des moyennes des sessions
			setAverageSessions(averageSessionsDataInstance);                                  // Mise à jour de l'état de moyenne.. avec l'instance des moyennes ...
		}
	}, [id]);                                                                                 // Il s'exécutera chaque fois que la valeur de id changera.

	if (!user) {
		return null;                                                                          // Si les données de l'user ne sont pas chargées, le composant return null.
	}
	return (
		<>
			<div className={styles.main}>
				<Title user={user} />
				<DailyActivity className={styles.dailyActivity} activity={activity} userId={id} />
				<Energies className={styles.energies} user={user} />

				<div className={styles.trainingBoxes}>
					<ASDuration averageSessions={averageSessions} userId={id} />
					<Intensity performance={performance} userId={id} />
					<Score user={user} />
				</div>
			</div>
		</>
	);
}
