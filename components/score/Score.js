import React from "react";
import styles from "./Score.module.css";
import { RadialBarChart, RadialBar, PolarGrid, Cell, ResponsiveContainer, PolarAngleAxis  } from "recharts";
import { USER_MAIN_DATA } from "../../data/mock";

export default function Score({ id }) {
  let user = USER_MAIN_DATA.find((user) => user.id === id);

  // Vérifiez que 'user' n'est pas 'undefined'
  if (!user) {
    return <div>AUcun User</div>;
  }

  const score = user.todayScore || user.score;
  const data = [ // création ou récuperation des données qui afficheront le graphique
    { name: 'Score', value: score * 100, fill: '#FF0000' },   // en fonction du score 
  ];

	return (
    <div className={styles.score}>
		<ResponsiveContainer width="100%" height="100%">
			<RadialBarChart 
        cx="50%" 
        cy="50%" 
        innerRadius="80%" 
        outerRadius="90%" 
        barSize={10} 
        data={data}
        startAngle={90}
        endAngle={-270}
        fill="blue"
      >
       <PolarAngleAxis 
          type="number" 
          domain={[0, 100]} 
          angleAxisId={0} 
          tick={false}
          reversed // Pour inverser le sens du diagramme
        />
			
        <RadialBar 
          minAngle={15} 
      
          clockWise
          dataKey="value"
          background={{ fill: '#FBFBFB' }}
          cornerRadius={50}
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)
          }
        </RadialBar>
        <circle cx="50%" cy="50%" r="94" fill="white" />  {/* Cercle intérieur orange */}


        <text x='50%' y='50%' textAnchor="middle" dominantBaseline="middle" fill="#282D30">
          <tspan x='50%' dy='-0.5em' className={styles.pourcentage}>{`${score * 100}%`}</tspan>  {/* ici je regle la hauteur de mon pourcentage  */}
          <tspan className={styles.objectif} x='50%' dy='1.6em' fill="#74798C" >de votre</tspan>
          <tspan className={styles.objectif} x='50%' dy='1.6em' fill="#74798C" >objectif</tspan>
        </text>
			</RadialBarChart>
		</ResponsiveContainer>
    </div>
	);
}
