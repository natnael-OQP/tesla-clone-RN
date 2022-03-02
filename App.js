import { StatusBar } from "expo-status-bar";
import { SafeAreaView, FlatList, Dimensions } from "react-native";
import CarItem from "./components/carItem";
import styles from "./components/carItem/style";
import cars from "./components/carList/cars";
export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={cars}
				renderItem={({ car }) => <CarItem data={car} />}
				showVerticalScrollIndicator={false}
				snapToAAlignment={"start"}
				decelerationRate={"fast"}
				snapToInterval={Dimensions.get("window").height}
			/>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}
