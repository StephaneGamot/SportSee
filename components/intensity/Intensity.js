import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import styles from "./Intensity.module.css";
import { CustomizedAxisTick } from "./CustomIntensity";
import Performance from "../../models/Performance";

/**
 * La fonction rend un diagramme radar affichant les données de performance d'un utilisateur.
 * @returns Un composant React qui rend un RadarChart en utilisant les données de performance. S'il n'y a pas de données de performance disponibles pour l'utilisateur, un message est affiché à la place.
 * données de performance disponibles pour l'utilisateur, un message est affiché à la place.
 */
export default function Intensity({ performanceData, userId, performance }) {
	let performanceInstance;

	if (performance instanceof Performance) {
		performanceInstance = performance;
	} else if (performance) {
		performanceInstance = new Performance(performance);
	} else if (Array.isArray(performanceData)) {
		const userPerformanceData = performanceData.find((performance) => performance.userId === userId);
		if (userPerformanceData) {
			performanceInstance = new Performance(userPerformanceData);
		}
	}

	if (!performanceInstance) {
		return <div>Pas de données de performance pour cet utilisateur</div>;
	}

	let data = [
		performanceInstance.cardio,
		performanceInstance.energy,
		performanceInstance.endurance,
		performanceInstance.strength,
		performanceInstance.speed,
		performanceInstance.intensity,
	]
		.filter((item) => item !== null)
		.reverse();

	return (
		<div className={styles.intensity}>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>                {/* Création le graphique radar, centré */}
					<PolarGrid gridType="polygon" radialLines={false} />                    {/* création d'une grille polaire polygonale */}
					<PolarAngleAxis dataKey="kind" tick={<CustomizedAxisTick />} />         {/* Création l'axe des angles du graphique */}
					<PolarRadiusAxis tickCount={6} axisLine={false} tick={false} />         {/* Création l'axe du rayon du graphique */}
					<Radar dataKey="value" stroke="none" fill="#FF0101" fillOpacity={0.7} />{/* Controle la valeur, couleur de fond, ligne */}
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}
