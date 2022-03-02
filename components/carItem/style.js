import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: Dimensions.get("window").height,
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
	taglineContainer: {
		display: "flex",
	},
	tagline: {
		fontSize: 14,
		color: "#5c5e62",
		fontWeight: "600",
	},
	taglineCTA: {
		marginLeft: 5,
		fontSize: 14,
		color: "#5c5e62",
		fontWeight: "700",
		textDecorationLine: "underline",
	},
	background: {
		width: "100%",
		height: "100%",
		position: "absolute",
		resizeMode: "cover",
	},
	btnContainer: {
		marginTop: "auto",
		paddingBottom: 30,
	},
});

export default styles;
