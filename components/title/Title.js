import React from "react";
import { USER_MAIN_DATA } from "../../data/mock";
import User from '../../models/User';
import styles from "../../styles/page.module.css";

export default function Title({ id }) {
	let userData = USER_MAIN_DATA.find((data) => data.id === id);

	if (!userData) {
		return <div>User Absent</div>;
	}

	let user = new User(userData);
	let firstName = user.firstName;
	
	return (
		<div className={styles.title}>
			<h1 className={styles.h1}>
				Bonjour<span className={styles.firstName}> {firstName}</span>
			</h1>
			<h2 className={styles.h2}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
		</div>
	);
}
