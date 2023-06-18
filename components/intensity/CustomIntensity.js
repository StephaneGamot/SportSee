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
		<text x={x} y={y} texttype="adjusted"  textAnchor="middle" fill="white" dy={4} fontSize={12}>
			{payload.value}
		</text>
	);
};
