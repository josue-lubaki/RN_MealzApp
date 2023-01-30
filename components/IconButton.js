import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../utils/Colors';

const IconButton = (props) => {
	const { icon, color = Colors.white, size = 24, onPress } = props;
	return (
		<Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
			<Ionicons name={icon} size={size} color={color} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressed: {
		opacity: 0.7,
	},
});

export default IconButton;
