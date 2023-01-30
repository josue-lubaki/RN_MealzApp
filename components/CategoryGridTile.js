import { View, StyleSheet, Text, Pressable, Platform } from 'react-native';
import Colors from '../utils/Colors';

const CategoryGridTile = (props) => {
	const { title, color, onPress } = props;

	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ color: Colors.lightGray }}
				style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
				onPress={onPress}
			>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		elevation: 4,
		borderRadius: 8,
		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		backgroundColor: Colors.white,
		overflow: Platform.select({ ios: 'visible', android: 'hidden' }),
	},
	button: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	buttonPressed: {
		opacity: 0.5,
	},
});

export default CategoryGridTile;
