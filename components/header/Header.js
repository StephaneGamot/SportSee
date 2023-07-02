import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "../../public/assets/logo.png";
import NavBar from "./NavBar";

/**
 * The function returns a header component with a logo and a navigation bar.
 * @returns The `Header` component is returning a `div` element containing an `Image` component and a
 * `NavBar` component.
 */
export default function Header() {
	return (
		<div className={styles.header}>
			<Image src={Logo} alt={"logo de la societe SportSee"} width={178} height={61} className={styles.logo} />
			<NavBar />
		</div>
	);
}
