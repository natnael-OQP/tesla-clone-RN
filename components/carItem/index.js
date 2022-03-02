import { View, Text, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./style";

const CarItem = ({ image, name, taglineCTA, tagline }) => {
	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.background} />
			<View style={styles.info}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.price}>{tagline}</Text>
			</View>
			<View style={styles.btnContainer}>
				<StyledButton primary content="Custom Order " />
				<StyledButton content="Existing Inventory " />
			</View>
		</View>
	);
};

export default CarItem;
