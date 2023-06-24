import React from "react";
import styles from "./DailyActivity.module.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Activity from "../../models/Activity";
import { RedDot, DarkDot } from "@/utils/dots";

function CustomTooltip({ payload, active }) {
	if (active && payload && payload.length) {
		return (
			<div className={styles.customTooltip}>
				<p>{`${payload[0].value} kg`}</p> {/* Au survol (payload) la 1er info apprait dans mon tooltip */}
				<p>{`${payload[1].value} kcal`}</p> {/* Au survol (payload) la 2nd info apprait dans mon tooltip */}
			</div>
		);
	}

	return null;
}

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

			<ResponsiveContainer className={styles.responsiveContainer}>
				<BarChart className={styles.barChart} data={user.sessions}>
					<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DEDEDE" />
					<XAxis dataKey="day" axisLine={{ stroke: "#DEDEDE" }} tickLine={false} tick={{ fill: "#9B9EAC", dy: 15 }} className={styles.xaxis} />

					<YAxis yAxisId="left" dataKey="calories" hide={true} />
					<YAxis yAxisId="right" dataKey="kilogram" orientation="right" domain={["dataMin - 1", "dataMax + 1"]} tickLine={false} axisLine={false}  tickFormatter={(value) => Math.round(value)} />
					<Tooltip content={<CustomTooltip />} />

					<Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
					<Bar yAxisId="left" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
