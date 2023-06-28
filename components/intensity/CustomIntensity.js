const translations = {
	cardio: "Cardio",
	energy: "Énergie",
	endurance: "Endurance",
	strength: "Force",
	speed: "Vitesse",
	intensity: "Intensité",
};

/**
 * The function CustomizedAxisTick adjusts the position of text labels based on their payload value.
 * @returns a JSX element, specifically a `<text>` element with attributes such as `x`, `y`,
 * `texttype`, `textAnchor`, `fill`, `dy`, and `fontSize`. The text content of the element is
 * determined by the `translations` object, which is using the `payload.value` as a key to retrieve the
 * corresponding translation. The function also includes conditional statements
 */
export const CustomizedAxisTick = ({ x, y, payload }) => {
	let value;
	if (payload.value === "cardio") {
		x -= 17; // Déplacement vers la gauche
	} else if (payload.value === "energy") {
		x -= 17; // Déplacement vers la gauche
	} else if (payload.value === "intensity") {
		y -= 5; // Déplacez vers le haut
	} else if (payload.value === "speed") {
		x += 17; // Déplacement vers la droite
	} else if (payload.value === "strength") {
		x += 17; // Déplacement vers la droite
	} else if (payload.value === "endurance") {
		y += 5; // // Déplacement vers le bas
	} else {
		value = payload.value;
	}

	return (
		<text x={x} y={y} texttype="adjusted" textAnchor="middle" fill="white" dy={4} fontSize={12}>
			{translations[payload.value]}
		</text>
	);
};
