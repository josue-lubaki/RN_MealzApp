import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const renderCategoryItem = (itemData) => {
	return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;
};

const CategoriesScreen = () => {
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
