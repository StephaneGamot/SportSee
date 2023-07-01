import React from "react";
import styles from "./averageSessionDuration.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Customized } from "recharts";
import { CustomizedCross, CustomizedActiveDot, CustomTooltip, CustomizedAxisTick } from "./CustomAverageSessionDuration";
import AverageSessions from "../../models/AverageSessions";

/**
 * La fonction affiche un graphique linéaire de la durée moyenne de la session pour un utilisateur.
 *  @returns Un composant React qui affiche un graphique linéaire de la durée moyenne de la session 
 * pour un utilisateur, sur la base des données fournies.
 */
export default function AverageSessionDuration({ userId, averageSessions, aSDurationData }) {
	const daysOfWeek = ["", "L", "M", "M", "J", "V", "S", "D"];
	let userASDurationData;
	if (averageSessions) {
		userASDurationData = averageSessions;
	} else {
		if (!aSDurationData) {
			console.error("aSDurationData is undefined!");
			return null;
		}
		userASDurationData = aSDurationData.find((aSDuration) => aSDuration.userId === userId);
	}

	let userASDurationInstance = new AverageSessions(averageSessions);

	let user = {
		userId: userASDurationInstance.userId,
		sessions: userASDurationInstance.sessions.map((session) => ({
			...session,
			day: session.day,
			sessionLength: session.sessionLength,
		})),
	};

	if (!user) {
		return null;
	}

	const mappedSessions = user.sessions.map((session) => {
		return {
			...session,
			day: daysOfWeek[session.day],
		};
	});

	return (
		<div className={styles.averageSessionDuration}>
			<h3 className={styles.averageSessionDurationTitle}>
				Durée moyenne des <br></br>sessions
			</h3>
			<ResponsiveContainer width="100%" height="100%"> {/* Rend le graphique adaptable à la taille de son conteneur parent */}
				<LineChart                                    // Création le graphique linéaire 
					data={mappedSessions}
					strokeWidth={0}                           // Définit la largeur du trait du graphique
					margin={{                                 // Détermine l'espace autour du graphique
						top: 0,
						right: 0,
						left: 0,
						bottom: 10,
					}}
				>
					<defs>                                                               {/* SVG. Elles définissent un dégradé linéaire  */}
						<linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">        {/* le tracé de la ligne */}
							<stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
							<stop offset="25%" stopColor="#FFFFFF" stopOpacity={0.525} />
							<stop offset="50%" stopColor="#FFFFFF" stopOpacity={0.65} />
							<stop offset="75%" stopColor="#FFFFFF" stopOpacity={0.8} />
							<stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
						</linearGradient>
					</defs>

					<XAxis dataKey="day" tickLine={false} axisLine={false} stroke="white" interval={0} minTickGap={0} tick={<CustomizedAxisTick />} /> {/* */}
					<YAxis hide={true} domain={[0, "dataMax + 35"]} />    {/* définit l'axe des y */}
					<Tooltip content={<CustomTooltip />} />               {/* bulle d'aide qui s'affiche lorsque l'utilisateur survole une donnée  */}

					<Line type="monotone" dataKey="sessionLength" dot={false} activeDot={<CustomizedActiveDot />} stroke="url(#colorUv)" strokeWidth={2} />  {/* Définit la ligne du graphique */}
					<Customized component={CustomizedCross} />            {/* Personnalisation du graphique */}
					<CartesianGrid stroke="none" />                       {/*  Définit la grille cartésienne de l'arrière-plan */} 
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
} 
