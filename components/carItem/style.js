import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		backgroundColor: "#e5e5e5",
		position: "relative",
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
	background: {
		width: "100%",
		height: "100%",
		position: "absolute",
		resizeMode: "cover",
	},
});

export default styles;
