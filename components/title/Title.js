import React from "react";
import User from "../../models/User";
import styles from "../../styles/page.module.css";

export default function Title({ user }) {
	console.log(user);
	if (!user) {
		return <div>User Absent encore</div>;
	}

	let firstName = user.firstName;
	let lastName = user.lastName;
	console.log(firstName + " " + lastName);

	return (
		<div className={styles.title}>
			<h1 className={styles.h1}>
				Bonjour<span className={styles.firstName}> {firstName}</span>
			</h1>
			<h2 className={styles.h2}>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
		</div>
	);
}
