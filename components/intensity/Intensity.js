import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import styles from './Intensity.module.css'
import { USER_PERFORMANCE } from "../../data/mock";


export default function Intensity({ userId }) {
  let user =  USER_PERFORMANCE.find((user) => user.userId === userId);
  
  // Convertissez les données en un format plus approprié pour le RadarChart
  let data = user.data.map(item => ({
    kind: user.kind[item.kind],
    value: item.value,
  }));

  return (
    <div className={styles.intensity} >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="value" stroke="red" fill="white" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}