const translations = {
	cardio: "Cardio",
	energy: "Énergie",
	endurance: "Endurance",
	strength: "Force",
	speed: "Vitesse",
	intensity: "Intensité",
};

/**
 * La fonction CustomizedAxisTick ajuste la position des étiquettes de texte en fonction de la valeur de leur charge utile.
 * @returns a JSX element, specifically a `<text>` element with attributes such as `x`, `y`,
 * `texttype`, `textAnchor`, `fill`, `dy`, et `fontSize`. Le contenu textuel de l'élément est
 * déterminé par l'objet `translations`, qui utilise `payload.value` comme clé pour récupérer la traduction correspondante.
 * traduction correspondante. La fonction inclut également des instructions conditionnelles
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
