import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

const List = ({ data }) => {
	return data.map((element) => (
		<View key={element} style={styles.listItem}>
			<Text style={styles.itemText}>{element}</Text>
		</View>
	));
};

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 12,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: Colors.secondary,
	},
	itemText: {
		color: Colors.primary,
		textAlign: 'center',
		fontWeight: 'bold',
	},
});

export default List;
