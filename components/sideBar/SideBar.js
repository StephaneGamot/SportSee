import React from "react";
import styles from "./SideBar.module.css";
import SideBarIcons from "./SideBarIcons";
import Image from "next/image";
import Yoga from "../../public/assets/yoga.png";
import Swim from "../../public/assets/swim.png";
import Bike from "../../public/assets/bike.png";
import Weight from "../../public/assets/weight.png";

/**
 * La fonction SideBar renvoie un composant qui affiche quatre icônes et un texte de copyright.
 * @param props - un objet contenant tous les props passés au composant SideBar. Cependant, étant donné qu'il n'y a
 * Cependant, étant donné qu'aucun accessoire n'est transmis dans cet extrait de code, le paramètre props n'est pas utilisé.
 * @returns Un composant fonctionnel React qui rend une barre latérale avec quatre icônes et un texte vertical en bas.
 * en bas.
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
