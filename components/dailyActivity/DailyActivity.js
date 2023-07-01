import React from "react";
import styles from "./DailyActivity.module.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Activity from "../../models/Activity";
import { RedDot, DarkDot } from "@/utils/dots";

/**
 * Il s'agit d'un composant d'infobulle personnalisé en JavaScript qui affiche des informations à partir d'une charge utile lorsqu'elle est
 * actif.
 * @returns Un composant React qui rend une infobulle personnalisée. Si la propriété `active` est vraie et que la propriété
 * `payload` n'est pas nul ou vide, le composant rendra deux paragraphes avec des informations provenant de
 * du tableau `payload`. Si les conditions ne sont pas remplies, le composant renverra null.
 */
function CustomTooltip({ payload, active }) {
	if (active && payload && payload.length) {
		return (
			<div className={styles.customTooltip}>
				<p>{`${payload[0].value} kg`}</p>     {/* Au survol (payload) la 1er info apprait dans mon tooltip */}
				<p>{`${payload[1].value} kcal`}</p>   {/* Au survol (payload) la 2nd info apprait dans mon tooltip */}
			</div>
		);
	}

	return null;
}

/**
 * La fonction Activité quotidienne affiche un diagramme à barres des données d'activité quotidienne d'un utilisateur, y compris son
 * poids et les calories brûlées.
 * @returns Un composant React qui affiche un graphique d'activité quotidienne pour un utilisateur, avec des barres représentant
 * son poids et les calories brûlées pour chaque jour. S'il n'y a pas de données d'activité pour l'utilisateur, un message
 * est affiché à la place.
 */
export default function DailyActivity({ activityData, userId, activity }) {
	let userActivityData;

	if (activity) {
		userActivityData = activity;
	} else {
		userActivityData = activityData.find((activity) => activity.userId === userId);
	}

	if (!userActivityData) {
		return <div>aucune activité pour cet utilisateur</div>;
	}

	const userActivityInstance = new Activity(userActivityData);

	let user = {
		userId: userActivityInstance.userId,
		sessions: userActivityInstance.sessions.map((session) => ({
			...session,
			day: session.day.substring(9),
		})),
	};

	return (
		<div className={styles.dailyA}>
			<div className={styles.dailyActivityTop}>
				<h3 className={styles.dailyActivityTopTitle}>Activité quotidienne</h3>
				<div className={styles.barNames}>
					<div className={styles.barName}>
						<DarkDot /> <p>Poids (kg)</p>
					</div>
					<div className={styles.barName}>
						<RedDot /> <p>Calories brûlées (kCal)</p>
					</div>
				</div>
			</div>

			<ResponsiveContainer className={styles.responsiveContainer}>                      {/* C'est un composant Recharts qui rend le graphique responsive */}
				<BarChart className={styles.barChart} data={user.sessions}>                   {/* C'est le composant qui crée le graphique à barres. */}
					<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DEDEDE" /> {/* C'est le composant qui dessine une grille cartésienne (grille d'arrière-plan) */}
					<XAxis dataKey="day" axisLine={{ stroke: "#DEDEDE" }} tickLine={false} tick={{ fill: "#9B9EAC", dy: 15 }} className={styles.xaxis} />

					<YAxis yAxisId="left" dataKey="calories" hide={true} />                   {/* C'est le composant qui dessine l'axe des y - cache cet axe */}
					<YAxis
						yAxisId="right"
						dataKey="kilogram"                              //  Il affiche les kilogrammes 
						orientation="right"                             // Il est placé à droite. 
						domain={["dataMin - 1", "dataMax + 1"]}         // Spécifie l'intervalle de valeurs de l'axe 
						tickLine={false}                                // Suppression des ligne de marquage
						axisLine={false}                                // Suppression de l'axe
						tickFormatter={(value) => Math.round(value)}    // Pour arrondir les valeurs de l'axe.
					/>
					<Tooltip content={<CustomTooltip />} />             {/* Affiche une info-bulle lorsque l'utilisateur survole une barre */}

					<Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} /> {/* Dessine les barres du graphique */}
					<Bar yAxisId="left" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />  {/* Dessine les barres du graphique */}
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
