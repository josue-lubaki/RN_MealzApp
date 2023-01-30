import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<SafeAreaView style={styles.rootContainer}>
				<CategoriesScreen />
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
});
