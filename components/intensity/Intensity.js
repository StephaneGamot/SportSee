import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import styles from "./Intensity.module.css";
import { CustomizedAxisTick } from "./CustomIntensity";
import Performance from "../../models/Performance";

export default function Intensity({ performanceData, userId, performance }) {
  console.log("Rendering Intensity");

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
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis dataKey="kind" tick={<CustomizedAxisTick />} />
          <PolarRadiusAxis tickCount={6} axisLine={false} tick={false} />
          <Radar dataKey="value" stroke="none" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}


/*
import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import styles from "./Intensity.module.css";
import { CustomizedAxisTick } from "./CustomIntensity";
import Performance from "../../models/Performance";

	
	export default function Intensity({ performanceData, userId, performance }) {
		console.log('Rendering Intensity');  // Ajoutez cette ligne
		  
		let userPerformanceData;
	  
		if (performance) {
		  userPerformanceData = performance;
		} else {
		  if (Array.isArray(performanceData)) {
			userPerformanceData = performanceData.find((performance) => performance.userId === userId);
		  } else {
			userPerformanceData = performanceData;
		  }
		}
	
	if (!userPerformanceData) {
	  return <div>Pas de données de performance pour cet utilisateur</div>;
	}
	
	const performanceInstance = new Performance(userPerformanceData);
	
	// Vous pouvez maintenant accéder à toutes les données de performance en utilisant les getters que vous avez définis.
	let data = [
	  performanceInstance.cardio,
	  performanceInstance.energy,
	  performanceInstance.endurance,
	  performanceInstance.strength,
	  performanceInstance.speed,
	  performanceInstance.intensity,
	].filter(item => item !== null).reverse();
	
	return (
	  <div className={styles.intensity}>
		<ResponsiveContainer width="100%" height="100%">
		  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
			<PolarGrid gridType="polygon" radialLines={false} />
			<PolarAngleAxis dataKey="kind" tick={<CustomizedAxisTick />} />
			<PolarRadiusAxis tickCount={6} axisLine={false} tick={false} />
			<Radar dataKey="value" stroke="none" fill="#FF0101" fillOpacity={0.7} />
		  </RadarChart>
		</ResponsiveContainer>
	  </div>
	);
  }



import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import styles from "./Intensity.module.css";
import { CustomizedAxisTick } from "./CustomIntensity";
import Performance from "../../models/Performance";

export default function Intensity({ performanceData, userId, performance }) {
	console.log("Rendering Intensity");

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
				<RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
					<PolarGrid gridType="polygon" radialLines={false} />
					<PolarAngleAxis dataKey="kind" tick={<CustomizedAxisTick />} />
					<PolarRadiusAxis tickCount={6} axisLine={false} tick={false} />
					<Radar dataKey="value" stroke="none" fill="#FF0101" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
}
*/