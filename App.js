import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button, Text, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#e5e5e5",
	},
	info: {
		marginTop: "20%",
		width: "100%",
		alignItems: "center",
	},
	title: {
		fontSize: "35px",
		fontWeight: "600",
	},
	price: {
		fontSize: 16,
		color: "#5c5e62",
	},
});

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.info}>
				<Text style={styles.title}>Model S</Text>
				<Text style={styles.price}>Starting at $99,000 </Text>
			</View>
		</SafeAreaView>
	);
}
