import React from "react";
import styles from "./Nrj.module.css";
import Nrj from "./Nrj";
import Image from "next/image";
import Flame from "../../public/assets/energy.svg";
import Chicken from "../../public/assets/chicken.svg";
import Apple from "../../public/assets/apple.svg";
import Cheeseburger from "../../public/assets/cheeseburger.svg";

export default function Nrjs() {
	return (
		<div className={styles.AllNrjs}>
			<Nrj>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons1}`}>
					<Image src={Flame} alt=" logo" width={16} height={20} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{"1,930kCal"}</p>
					<p className={styles.WeightCalText}>{"Calories"}</p>
				</div>
			</Nrj>
			<Nrj>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons2}`}>
					<Image src={Chicken} alt=" logo" width={19} height={19} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{"1,930kCal"}</p>
					<p className={styles.WeightCalText}>{"Calories"}</p>
				</div>
			</Nrj>
			<Nrj>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons3}`}>
					<Image src={Apple} alt=" logo" width={17} height={20} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{"1,930kCal"}</p>
					<p className={styles.WeightCalText}>{"Calories"}</p>
				</div>
			</Nrj>
			<Nrj>
				<div className={`${styles.backgroundIcons} ${styles.backgroundIcons4}`}>
					<Image src={Cheeseburger} alt=" logo" width={20} height={19} />
				</div>
				<div className={styles.weightCal}>
					<p className={styles.weightCalTitle}>{"1,930kCal"}</p>
					<p className={styles.WeightCalText}>{"Calories"}</p>
				</div>
			</Nrj>
		</div>
	);
}
