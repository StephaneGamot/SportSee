import React from "react";
import styles from "./TrainingBoxes.module.css";
import ASDuration from "../averageSessionDuration/AverageSessionDuration";
import Intensity from "../intensity/Intensity";
import Score from "../score/Score";

export default function TrainingBoxes() {
	return (
		<div className={styles.trainingBoxes}>
			<ASDuration userId={12} />
			<Intensity userId={12} />
			<Score id={12} />
		</div>
	);
}
