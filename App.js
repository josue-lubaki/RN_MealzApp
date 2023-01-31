import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import { Provider } from 'react-redux';
import { store } from './store/redux/store';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { IconName } from './utils/IconName';
import Routes from './utils/Routes';
import Colors from './utils/Colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName={Routes.MEALS_CATEGORIES}
			screenOptions={{
				headerStyle: { backgroundColor: Colors.primary },
				headerTintColor: Colors.white,
				sceneContainerStyle: { backgroundColor: Colors.background },
				drawerContentStyle: { backgroundColor: Colors.primary },
				drawerInactiveTintColor: Colors.white,
				drawerActiveTintColor: Colors.primary,
				drawerActiveBackgroundColor: Colors.secondary,
			}}
		>
			<Drawer.Screen
				name={Routes.MEALS_CATEGORIES}
				component={CategoriesScreen}
				options={{
					title: 'All Categories',
					drawerIcon: ({ color, size }) => (
						<Ionicons name={IconName.LIST} color={color} size={size} />
					),
				}}
			/>
			<Drawer.Screen
				name={Routes.MEALS_FAVORITES}
				component={FavoritesScreen}
				options={{
					title: 'Favorites',
					drawerIcon: ({ color, size }) => (
						<Ionicons name={IconName.STAR} color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style='light' />
			<SafeAreaView style={styles.rootContainer}>
				<Provider store={store}>
					<NavigationContainer>
						<Stack.Navigator
							screenOptions={{
								headerStyle: { backgroundColor: Colors.primary },
								headerTintColor: Colors.white,
								contentStyle: { backgroundColor: Colors.background },
							}}
						>
							<Stack.Screen
								name={Routes.DRAWER}
								component={DrawerNavigator}
								options={{
									headerShown: false,
								}}
							/>
							<Stack.Screen name={Routes.MEALS_OVERVIEW} component={MealsOverviewScreen} />
							<Stack.Screen
								name={Routes.MEAL_DETAILS}
								component={MealDetailsScreen}
								options={{
									title: 'About the Meal',
								}}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</Provider>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
	},
});
