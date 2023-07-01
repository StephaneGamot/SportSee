import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import NavBar from "./NavBar";

/**
 * La fonction renvoie un composant d'en-tête avec un logo et une barre de navigation.
 * @returns Le composant `Header` renvoie un élément `div` contenant un composant `Image` et un composant `NavBar`.
 * composant `NavBar`.
 */
export default function Header() {
	return (
		<div className={styles.header}>
			<Image src={Logo} alt={"logo de la societe SportSee"} width={178} height={61} className={styles.logo} />
			<NavBar />
		</div>
	);
}
