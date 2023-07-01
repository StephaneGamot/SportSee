import React from "react";
import Styles from "./SideBar.module.css";

/**
 * La fonction SideBarIcons renvoie un élément div avec des composants enfants et un nom de classe spécifique.
 * @returns Un composant fonctionnel React qui rend un div avec le nom de classe "sideBarIcon" et tous les enfants qui lui sont passés.
 * enfants qui lui ont été transmis.
 */
export default function SideBarIcons({ children }) {
	return <div className={Styles.sideBarIcon}>{children}</div>;
}
