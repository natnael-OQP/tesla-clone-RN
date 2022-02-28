import { SafeAreaView } from "react-native";
import CarItem from "./components/carItem";
import styles from "./components/carItem/style";
import cars from "./components/carItem/cars";
export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			{cars.map((car) => (
				<CarItem
					key={car.name}
					image={car.image}
					name={car.name}
					tagline={car.tagline}
					taglineCTA={car.taglineCTA}
				/>
			))}
		</SafeAreaView>
	);
}
