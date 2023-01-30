import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../utils/Colors';

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subTitleContainer}>
			<Text style={styles.subTitle}>{children}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	subTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: Colors.secondary,
		textAlign: 'center',
	},
	subTitleContainer: {
		margin: 4,
		padding: 6,
		marginHorizontal: 12,
		borderBottomColor: Colors.tertiary,
		borderBottomWidth: 2,
	},
});

export default Subtitle;
