import { Icons } from '@/constants'
import { Image } from 'expo-image'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const RadioButton = ({ text, checked, onPress }) => {
	return (
		<TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
			<View style={styles.checkbox}>
				{checked && <Image source={Icons.Check} className='w-4 h-4' />}
			</View>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	checkboxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10
	},
	checkbox: {
		width: 24,
		height: 24,
		borderRadius: 12,
		borderWidth: 2,
		borderColor: '#007BFF',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 16,
		marginLeft: 10
	}
})

export default RadioButton
