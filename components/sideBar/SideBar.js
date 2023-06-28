import React from "react";
import styles from "./SideBar.module.css";
import SideBarIcons from "./SideBarIcons";
import Image from "next/image";
import Yoga from "../../public/assets/yoga.png";
import Swim from "../../public/assets/swim.png";
import Bike from "../../public/assets/bike.png";
import Weight from "../../public/assets/weight.png";

/**
 * The SideBar function returns a component that displays four icons and a copyright text.
 * @param props - an object containing any props passed to the SideBar component. However, since there
 * are no props being passed in this code snippet, the props parameter is not being used.
 * @returns A React functional component that renders a side bar with four icons and a vertical text at
 * the bottom.
 */
export default function SideBar(props) {
	return (
		<div className={styles.sideBar}>
			<div className={styles.containerSideBarIcons}>
				<SideBarIcons>
					<Image src={Yoga} alt="logo rouge de Yoga" width={36} height={32} />
				</SideBarIcons>
				<SideBarIcons>
					<Image src={Swim} alt="logo rouge d'un nageur" width={36} height={32} />
				</SideBarIcons>
				<SideBarIcons>
					<Image src={Bike} alt="logo rouge d'un cycliste'" width={36} height={32} />
				</SideBarIcons>
				<SideBarIcons>
					<Image src={Weight} alt="logo rouge d'un haltère'" width={36} height={32} />
				</SideBarIcons>
			</div>
			<div className={styles.verticalText}>Copiryght, SportSee 2020</div>
		</div>
	);
}
