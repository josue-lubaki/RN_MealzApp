import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from '../components/MealDetails';
import Colors from '../utils/Colors';
import Routes from '../utils/Routes';

const MealItem = (props) => {
	const { id, title, imageUrl, duration, complexity, affordability } = props;

	const navigation = useNavigation();

	return (
		<View style={styles.mealItem}>
			<Pressable
				android_ripple={{ color: Colors.lightGray }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={() => navigation.navigate(Routes.MEAL_DETAILS, { mealId: id })}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<MealDetails duration={duration} complexity={complexity} affordability={affordability} />
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

	buttonPressed: {
		opacity: 0.75,
	},
});

export default MealItem;
