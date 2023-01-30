import { useLayoutEffect, useContext } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';

import { FavoritesContext } from '../store/context/favorites-context';

import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

import { MEALS } from '../data/dummy-data';
import { IconName } from '../utils/IconName';
import Colors from '../utils/Colors';

const MealDetailsSreen = ({ navigation, route }) => {
	const { addFavorite, removeFavorite, ids } = useContext(FavoritesContext);

	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find((meal) => meal.id === mealId);
	const { title, imageUrl, duration, complexity, affordability, ingredients, steps } = selectedMeal;

	const isMealFavorite = ids.includes(mealId);

	const changeFavoriteStatusHandler = () => {
		if (isMealFavorite) {
			removeFavorite(mealId);
		} else {
			addFavorite(mealId);
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: title,
			headerRight: () => (
				<IconButton
					icon={isMealFavorite ? IconName.STAR : IconName.UNSTAR}
					onPress={changeFavoriteStatusHandler}
				/>
			),
		});
	}, [navigation, title, changeFavoriteStatusHandler]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: imageUrl }} style={styles.image} />
			<Text style={styles.title}>{title}</Text>
			<View style={styles.details}>
				<MealDetails
					duration={duration}
					complexity={complexity}
					affordability={affordability}
					textStyle={styles.detailText}
				/>
			</View>
			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={ingredients} />
					<Subtitle>Steps</Subtitle>
					<List data={steps} />
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: '100%',
		height: 320,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 8,
		color: Colors.white,
	},
	detailText: {
		color: Colors.white,
	},
	listContainer: {
		width: '80%',
	},
	listOuterContainer: {
		alignItems: 'center',
	},
});

export default MealDetailsSreen;
