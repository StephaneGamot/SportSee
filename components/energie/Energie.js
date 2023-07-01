import React from "react";
import styles from "./Energie.module.css";

/**
 * Il s'agit d'un composant React appelé "Energie" qui renvoie un div avec un nom de classe "energieCard" et qui rend tous les enfants qui lui sont passés.
 * rend tous les enfants qui lui sont passés.
 * @returns La fonction `Energie` retourne un élément JSX, qui est un élément `div` avec un nom de classe `energieCard` et les `children`.
 * nom de classe `energieCard` et l'élément `children` qui lui a été passé.
 */
export default function Energie({ children }) {
	return <div className={styles.energieCard}>{children}</div>;
}
