import React from "react";
import styles from "./Energie.module.css";

/**
 * This is a React component called "Energie" that returns a div with a class name of "energieCard" and
 * renders any children passed to it.
 * @returns The function `Energie` is returning a JSX element, which is a `div` element with a class
 * name of `energieCard` and the `children` prop passed to it.
 */
export default function Energie({ children }) {
	return <div className={styles.energieCard}>{children}</div>;
}
