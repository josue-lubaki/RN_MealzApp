import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import Routes from './utils/Routes';
import Colors from './utils/Colors';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<SafeAreaView style={styles.rootContainer}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: Colors.primary,
							},
							headerTintColor: Colors.white,
							contentStyle: {
								backgroundColor: Colors.background,
							},
						}}
					>
						<Stack.Screen
							name={Routes.MEALS_CATEGORIES}
							component={CategoriesScreen}
							options={{
								title: 'All Categories',
							}}
						/>
						<Stack.Screen name={Routes.MEALS_OVERVIEW} component={MealsOverviewScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
});
