import React from "react";
import styles from "./Nrj.module.css";
import Nrj from "./Nrj";
import Image from "next/image";
import Flame from "../../public/assets/energy.svg";
import Chicken from "../../public/assets/chicken.svg";
import Apple from "../../public/assets/apple.svg";
import Cheeseburger from "../../public/assets/cheeseburger.svg";
import { USER_MAIN_DATA } from "../../data/mock";

export default function Nrjs({ id }) {
	let user = USER_MAIN_DATA.find((user) => user.id === id);
	if (!user) {
		return <div>AUcun User</div>;
	}
	let caloriesNumber = (user.keyData.calorieCount / 1000).toFixed(3).replace(".", ",");
	let proteinWeight = user.keyData.proteinCount;
	let carbohydrateWeight = user.keyData.carbohydrateCount;
	let lipidWeight = user.keyData.lipidCount;

	return (
		<div className={styles.AllNrjs}>
			<Nrj>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons1}`}>
					<Image src={Flame} alt=" logo" width={16} height={20} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{caloriesNumber}kCal</p>
					<p className={styles.WeightCalText}>{"Calories"}</p>
				</div>
			</Nrj>
			<Nrj>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons2}`}>
					<Image src={Chicken} alt="logo d'une cuisse de poulet" width={19} height={19} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{proteinWeight}g</p>
					<p className={styles.WeightCalText}>{"Proteïnes"}</p>
				</div>
			</Nrj>
			<Nrj>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons3}`}>
					<Image src={Apple} alt="logo d'une pomme" width={17} height={20} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{carbohydrateWeight}g</p>
					<p className={styles.WeightCalText}>{"Glucides"}</p>
				</div>
			</Nrj>
			<Nrj>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons4}`}>
					<Image src={Cheeseburger} alt="logo d'un cheeseburger" width={20} height={19} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{lipidWeight}g</p>
					<p className={styles.WeightCalText}>{"Lipides"}</p>
				</div>
			</Nrj>
		</div>
	);
}
