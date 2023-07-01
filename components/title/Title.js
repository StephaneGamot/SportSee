import React from "react";
import User from "../../models/User";
import styles from "../../styles/page.module.css";

/**
 * La fonction Titre affiche un message d'accueil avec le prénom de l'utilisateur et un message de félicitations.
 * si les informations de l'utilisateur sont présentes.
 * @returns  Le composant `Title` est retourné. Si la propriété `user` n'est pas fournie, il renvoie une propriété
 * `<div>`  avec le texte "User Absent encore". Si le prop de l'utilisateur est fourni, il renvoie un
 * `<div>`  avec un titre et un message qui félicite l'utilisateur d'avoir atteint ses objectifs.
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
