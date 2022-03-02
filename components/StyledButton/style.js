import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		padding: 10,
		paddingTop: 5,
	},
	button: {
		textAlign: "center",
		borderRadius: 15,
		height: 30,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	name: {
		textTransform: "uppercase",
		fontSize: "14px",
		fontWeight: "600",
	},
});

export default styles;
