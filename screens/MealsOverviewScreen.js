import { useLayoutEffect } from 'react';

import MealsList from '../components/MealsList/MealsList';
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

	return <MealsList items={displayMeals} />;
};

export default MealsOverviewScreen;
