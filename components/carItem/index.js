import { View, Text, ImageBackground } from "react-native";
import styles from "./style";

const CarItem = ({ image, name, taglineCTA, tagline }) => {
	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.background} />
			<View style={styles.info}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.price}>{tagline}</Text>
			</View>
		</View>
	);
};

export default CarItem;
