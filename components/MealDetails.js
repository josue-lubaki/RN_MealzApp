import { View, Text, StyleSheet } from 'react-native';

const MealDetails = (props) => {
	const { duration, complexity, affordability, style, textStyle } = props;
	return (
		<View style={[styles.details, style]}>
			<Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
			<Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
			<Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 8,
		fontSize: 12,
	},
});

export default MealDetails;
