import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';

import MealsList from '../components/MealsList/MealsList';

import { MEALS } from '../data/dummy-data';
import Colors from '../utils/Colors';

const FavoriteScreen = () => {
	const { ids } = useContext(FavoritesContext);

	const favoritesMeals = MEALS.filter((meal) => ids.includes(meal.id));

	if (favoritesMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favorite meal yet.</Text>
			</View>
		);
	}

	return <MealsList items={favoritesMeals} />;
};

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 18,
		textAlign: 'center',
		fontWeight: 'bold',
		color: Colors.white,
	},
});

export default FavoriteScreen;
