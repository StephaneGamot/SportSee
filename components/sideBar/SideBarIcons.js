import React from "react";
import Styles from "./SideBar.module.css";

export default function SideBarIcons({ children }) {
	return <div className={Styles.sideBarIcon}>{children}</div>;
}
