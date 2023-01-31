import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../store/redux/favorites';

import MealsList from '../components/MealsList/MealsList';

import { MEALS } from '../data/dummy-data';
import Colors from '../utils/Colors';

const FavoriteScreen = () => {
	const favoritesMealIds = useSelector(selectFavorites);

	const favoritesMeals = MEALS.filter((meal) => favoritesMealIds.includes(meal.id));

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
