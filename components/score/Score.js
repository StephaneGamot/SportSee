import React from "react";
import styles from "./Score.module.css";
import User from "../../models/User";
import { RadialBarChart, RadialBar, Cell, ResponsiveContainer, PolarAngleAxis } from "recharts";

/**
 * La fonction Score renvoie un diagramme à barres radial affichant le score d'un utilisateur en pourcentage de son
 * ou 0 si aucun utilisateur n'est fourni.
 * @returns Un composant React qui affiche un diagramme à barres radial représentant le score de l'utilisateur. S'il n'y a
 * s'il n'y a pas d'utilisateur, il renvoie un message disant "Aucun utilisateur".
 */
export default function Score({ user }) {
	if (!user) {
		return <div>Aucun utilisateur</div>;
	}

	const score = user.todayScore !== null ? user.todayScore : user.score !== null ? user.score : 0;

	const data = [{ name: "Score", value: score * 100, fill: "#FF0000" }];

	return (
		<div className={styles.score}>
			<ResponsiveContainer width="100%" height="100%">         {/* c'est un composant de Recharts qui redimensionne automatiquement le graphique */}
				<RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="90%" barSize={10} data={data} startAngle={90} endAngle={-270} fill="blue">
					<PolarAngleAxis              // C'est le composant qui construit l'axe du graphique.
						type="number"
						domain={[0, 100]}        // Plage de 0 à 100
						angleAxisId={0}
						tick={false}             // tick contrôle l'affichage des marques sur l'axe
						reversed                 // Pour inverser le sens du diagramme
					/>
					<RadialBar minAngle={15} clockWise dataKey="value" background={{ fill: "#FBFBFB" }} cornerRadius={50}>   {/* composant qui construit la barre radiale du graphique */}
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.fill} />                                 // Chaque Cell représente une barre dans le graphique.
						))}
					</RadialBar>
					<circle cx="50%" cy="50%" r="94" fill="white" />                                         {/* Cercle intérieur blanc - élément SVG */}
					<text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fill="#282D30">      {/* élément SVG qui ajoute du texte au centre du graphique */}
						<tspan x="50%" dy="-0.5em" className={styles.pourcentage}>{`${score * 100}%`}</tspan>{/* ici je regle la hauteur de mon pourcentage  */}
						<tspan className={styles.objectif} x="50%" dy="1.6em" fill="#74798C">
							de votre
						</tspan>                                                                              {/* <tspan> à l'intérieur de l'élément text positionne */}
						<tspan className={styles.objectif} x="50%" dy="1.6em" fill="#74798C">
							objectif
						</tspan>
					</text>
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
}
