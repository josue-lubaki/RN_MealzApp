import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native';
import Colors from '../utils/Colors';

const MealItem = (props) => {
	const { title, imageUrl, duration, complexity, affordability } = props;

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: Colors.lightGray }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<View style={styles.details}>
						<Text style={styles.detailItem}>{duration}m</Text>
						<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
						<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 8,
	},
	image: {
		width: '100%',
		height: 200,
	},
	mealItem: {
		margin: 16,
		backgroundColor: Colors.white,
		borderRadius: 8,
		elevation: 4,
		shadowColor: Colors.black,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.35,
		shadowRadius: 8,
		overflow: Platform.select({ ios: 'visible', android: 'hidden' }),
	},
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
	},
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
	buttonPressed: {
		opacity: 0.75,
	},
});

export default MealItem;
