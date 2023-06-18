import React from "react";
import { USER_MAIN_DATA } from "../../data/mock";
import styles from "../../styles/page.module.css";

export default function Title({ id }) {
	let user = USER_MAIN_DATA.find((user) => user.id === id);
    let firstName = user.userInfos.firstName;

	if (!user) {
		return <div>User Absent</div>;
	}

	return (
		<div className={styles.title}>
			<h1 className={styles.h1}>
				Bonjour<span className={styles.firstName}> {firstName}</span>
			</h1>
			<h2 className={styles.h2}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
		</div>
	);
}
