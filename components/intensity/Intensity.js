import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import styles from "./Intensity.module.css";
import { USER_PERFORMANCE } from "../../data/mock";
import { CustomizedAxisTick } from "./CustomIntensity";

export default function Intensity({ userId }) {
	let user = USER_PERFORMANCE.find((user) => user.userId === userId);

	let data = user.data
		.map((item) => ({
			kind: user.kind[item.kind],
			value: item.value,
		})).reverse();

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
