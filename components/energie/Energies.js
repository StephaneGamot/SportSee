import React from "react";
import styles from "./Energie.module.css";
import Energie from "./Energie";
import Image from "next/image";
import Flame from "../../public/assets/energy.svg";
import Chicken from "../../public/assets/chicken.svg";
import Apple from "../../public/assets/apple.svg";
import Cheeseburger from "../../public/assets/cheeseburger.svg";

export default function Energies({ user }) {
	
	if (!user) {
		return <div>Aucun utilisateur</div>;
	}
	let caloriesNumber = (user.calorieCount / 1000).toFixed(3).replace(".", ",");
	let proteinWeight = user.proteinCount;
	let carbohydrateWeight = user.carbohydrateCount;
	let lipidWeight = user.lipidCount;

	return (
		<div className={styles.AllEnergies}>
			<Energie>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons1}`}>
					<Image src={Flame} alt=" logo" width={16} height={20} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{caloriesNumber}kCal</p>
					<p className={styles.WeightCalText}>{"Calories"}</p>
				</div>
			</Energie>
			<Energie>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons2}`}>
					<Image src={Chicken} alt="logo d'une cuisse de poulet" width={19} height={19} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{proteinWeight}g</p>
					<p className={styles.WeightCalText}>{"Proteïnes"}</p>
				</div>
			</Energie>
			<Energie>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons3}`}>
					<Image src={Apple} alt="logo d'une pomme" width={17} height={20} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{carbohydrateWeight}g</p>
					<p className={styles.WeightCalText}>{"Glucides"}</p>
				</div>
			</Energie>
			<Energie>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons4}`}>
					<Image src={Cheeseburger} alt="logo d'un cheeseburger" width={20} height={19} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{lipidWeight}g</p>
					<p className={styles.WeightCalText}>{"Lipides"}</p>
				</div>
			</Energie>
		</div>
	);
}
