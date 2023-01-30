import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import Routes from '../utils/Routes';

const CategoriesScreen = ({ navigation }) => {
	const renderCategoryItem = (itemData) => {
		const pressHandler = () => {
			navigation.navigate(Routes.MEALS_OVERVIEW);
		};

		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			renderItem={renderCategoryItem}
			keyExtractor={(item) => item.id}
			numColumns={2}
		/>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});

export default CategoriesScreen;
