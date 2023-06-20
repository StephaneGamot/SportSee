import React from "react";
import styles from "./TrainingBoxes.module.css";
import ASDuration from "../averageSessionDuration/AverageSessionDuration";
import Intensity from "../intensity/Intensity";
import Score from "../score/Score";

export default function TrainingBoxes(sessions) {
	return (
		<div className={styles.trainingBoxes}>
			<ASDuration userId={18} />
			<Intensity userId={18} />
			<Score id={18} />
		</div>
	);
}
