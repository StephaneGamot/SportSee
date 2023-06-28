import React from "react";
import Styles from "./SideBar.module.css";

/**
 * The SideBarIcons function returns a div element with children components and a specific class name.
 * @returns A React functional component that renders a div with the class name "sideBarIcon" and any
 * children passed to it.
 */
export default function SideBarIcons({ children }) {
	return <div className={Styles.sideBarIcon}>{children}</div>;
}
