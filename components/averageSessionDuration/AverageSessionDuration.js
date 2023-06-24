import React from "react";
import styles from "./averageSessionDuration.module.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Customized } from "recharts";
import { CustomizedCross, CustomizedActiveDot, CustomTooltip, CustomizedAxisTick } from "./CustomAverageSessionDuration";
import AverageSessions from "../../models/AverageSessions";

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
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					data={mappedSessions}
					strokeWidth={0}
					margin={{
						top: 0,
						right: 0,
						left: 0,
						bottom: 10,
					}}
				>
					<defs>
						<linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4} />
							<stop offset="25%" stopColor="#FFFFFF" stopOpacity={0.525} />
							<stop offset="50%" stopColor="#FFFFFF" stopOpacity={0.65} />
							<stop offset="75%" stopColor="#FFFFFF" stopOpacity={0.8} />
							<stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
						</linearGradient>
					</defs>

					<XAxis dataKey="day" tickLine={false} axisLine={false} stroke="white" interval={0} minTickGap={0} tick={<CustomizedAxisTick />} />
					<YAxis hide={true} domain={[0, "dataMax + 35"]} />
					<Tooltip content={<CustomTooltip />} />

					<Line type="monotone" dataKey="sessionLength" dot={false} activeDot={<CustomizedActiveDot />} stroke="url(#colorUv)" strokeWidth={2} />
					<Customized component={CustomizedCross} />
					<CartesianGrid stroke="none" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
