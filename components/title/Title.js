import React from "react";
import User from "../../models/User";
import styles from "../../styles/page.module.css";

/**
 * The Title function displays a greeting message with the user's first name and a congratulatory
 * message if the user's information is present.
 * @returns The `Title` component is being returned. If the `user` prop is not provided, it returns a
 * `<div>` element with the text "User Absent encore". If the `user` prop is provided, it returns a
 * `<div>` element with a title and a message that congratulates the user for achieving their goals.
 */
export default function Title({ user }) {
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
