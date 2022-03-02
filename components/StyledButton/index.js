import { Text, View, Pressable } from "react-native";
import styles from "./style";

const StyledButton = ({ primary, content }) => {
	const backgroundColor = primary ? "#171A20CC" : "#FFFFFFA6";
	const color = primary ? "#FFFFFF" : "#000";
	return (
		<View style={styles.container}>
			<Pressable style={[styles.button, { backgroundColor }]}>
				<Text style={[styles.name, { color }]}>{content}</Text>
			</Pressable>
		</View>
	);
};

export default StyledButton;
