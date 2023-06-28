import React from "react";
import styles from "./averageSessionDuration.module.css";
import { Cross } from "recharts";

const chartWidth = 258;
const chartHeight = 263;

export const CustomizedCross = () => <Cross stroke={0} />;

export const CustomizedActiveDot = ({ cx, cy }) => {
	const width = chartWidth - cx;
	return (
		<g>
			<circle cx={cx} cy={cy} r={5} fill="white" stroke="rgba(255, 255, 255, 0.5)" strokeWidth={5} />
			<rect x={cx} y={0} width={width} height={chartHeight} fill="rgba(0, 0, 0, 0.3)" />
		</g>
	);
};

export const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className={styles.customTooltip} >
				<p className={styles.label}>{`${payload[0].value} min`}</p>
			</div>
		);
	}
	return null;
};

export const CustomizedAxisTick = ({ x, y, payload, index }) => {
	let xOffset = 0;

	if (index === 0) {
		xOffset = 9;
	}

	if (index === 6) {
		xOffset = -6;
	}
	return (
		<g transform={`translate(${x + xOffset},${y})`}>
			<text x={0} y={0} dy={12} textAnchor="end" fill="#FFFFFF" fontSize={12} fontWeight={500} style={{ mixBlendMode: "normal" }}>
				{payload.value}
			</text>
		</g>
	);
};
