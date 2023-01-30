import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
	const categoryId = route.params.categoryId;

	const displayMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [categoryId, navigation]);

	const renderMealItem = (itemData) => {
		const item = itemData.item;
		const mealItemProps = {
			title: item.title,
			imageUrl: item.imageUrl,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
		};

		return <MealItem {...mealItemProps} />;
	};

	return (
		<View style={styles.container}>
      <FlatList
        data={displayMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});

export default MealsOverviewScreen;
