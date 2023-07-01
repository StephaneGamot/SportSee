import React, { useEffect } from "react";
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
import Energies from "../../components/energie/Energies";

const UserPage = ({ user, activity, averageSessions, performance }) => {
	
	const router = useRouter();                                           // J'initialise le routeur Next.js qui me permet de naviguer entre différentes pages.
	const { id } = router.query;                                          // Je déstructure l'objet query du router pour récupérer id.

	useEffect(() => {
		if (process.env.NEXT_PUBLIC_USE_MOCK_DATA === 'true') {           //  Je l'utilise pour rediriger vers /user/[id].js si la variable d'environnement NEXT_PUBLIC_USE_MOCK_DATA est définie sur 'false'.
		  router.push(`/`);
		}
	  });

	if (!id || !user || !activity || !averageSessions || !performance) {  //  si toutes les données sont disponibles. 
		return <div>Loading...</div>;                                     // Si ce n'est pas le cas, il affiche "Loading...".
	}

	let userInstance = new User(user);                               // Création des instances du modèle User à partir des données user passées en props.
	let activityInstance = new Activity(activity);                   // Création des instances du modèle Activity à partir des données activity passées en props.
	let aSDurationInstance = new AverageSessions(averageSessions);   // Création des instances du modèle AverageSessions à partir des données averageSessions passées en props.
	let performanceInstance = new Performance(performance);          // Création des instances du modèle Performance à partir des données performance passées en props.

	return (
		<div className={styles.main}>
			<Title user={userInstance} />
			<DailyActivity className={styles.dailyActivity} activity={activityInstance} />
			<Energies className={styles.energies} user={userInstance} />
			<div className={styles.trainingBoxes}>
				<ASDuration averageSessions={aSDurationInstance} />
				<Intensity performance={performanceInstance} />
				<Score user={userInstance} />
			</div>
		</div>
	);
};

export async function getServerSideProps(context) {        // Fonction spécifique de Next.js qui est exécutée côté serveur avant que la page ne soit rendue. Elle est exécutée à chaque requête
	const { id } = context.params;                         // Je récupére l'id à partir des paramètres de la requête (URL).

	const fetchData = async (url) => {                     // Je récupère des données à partir d'une URL 
		return fetch(url)                                  // Elle retourne une promesse qui résout les données récupérées. Elle retourne une promesse
			.then((response) => {                          // Une fois la promesse résolue, then est exécutée
				if (!response.ok) {                        // Si pas ok
					throw new Error("Data fetch failed");  // Je renvoie une erreur
				}
				return response.json();                    // je retourne la réponse en Json
			})
			.catch((error) => {
				console.error(error);
				return null;                               // Renvoie null en cas d'erreur.
			});
	};

	/* USER */
	const userResponse = await fetchData(`http://localhost:3002/user/${id}`);  // Je récupère les données de l’api => la variable

	if (!userResponse || !userResponse.data || !userResponse.data.userInfos) { // Je vérifie si la réponse de l'API contient bien les informations voulues
		return {
			props: {                                                           // Si négatif alors il renverra null
				user: null, 
				activity: null,
				performance: null,
				averageSessions: null,
			},
		};
	}
	const user = {                                         // Création d'un nouvel Objet structuré
		id: userResponse.data.id,                          // J'initialisée avec la valeur correspondante
		firstName: userResponse.data.userInfos.firstName,
		lastName: userResponse.data.userInfos.lastName,
		age: userResponse.data.userInfos.age,
		score: userResponse.data.score || null,
		todayScore: userResponse.data.todayScore || null,
		keyData: userResponse.data.keyData,
	};

	/* AVERAGE SESSIONS */
	const aSDurationResponse = await fetchData(`http://localhost:3002/user/${id}/average-sessions`);// Je récupère les données de l’api => la variable
	const aSDurationData = aSDurationResponse.data;                                                 // Création d'un nouvel Objet structuré

	if (!aSDurationData) {                                                // Si les données sont absentes 
		console.error("aSDurationData is malformed:", aSDurationData);
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

	/* ACTIVITY */
	const activityResponse = await fetchData(`http://localhost:3002/user/${id}/activity`);    // Je récupère les données de l’api => la variable
	const activityData = activityResponse.data;
	const activity = {
		userId: activityData.userId,
		sessions: activityData.sessions || [],
	};

	/* PERFORMANCE */
	const performanceResponse = await fetchData(`http://localhost:3002/user/${id}/performance`);   // Je récupère les données de l’api => la variable
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
			averageSessions: aSDuration,
		},
	};
}

export default UserPage;