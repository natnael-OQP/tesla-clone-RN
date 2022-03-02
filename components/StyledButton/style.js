import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 10,
		paddingTop: 10,
	},
	button: {
		textAlign: "center",
		borderRadius: 15,
		height: 35,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	name: {
		textTransform: "uppercase",
		fontSize: "16px",
		fontWeight: "600",
	},
});

export default styles;
