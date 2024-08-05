import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card = ( { text, imageSource, checked, onPress, disabled } ) => {

	return (
		<View className='m-2'>
			<TouchableOpacity
				style={[
					styles.checkboxContainer,
					checked && styles.checked,
					disabled && styles.disabled
				]}
				className='bg-[#EFEFEF] w-[74px] h-24 shadow-sm rounded-lg flex items-center justify-center'
				onPress={!disabled ? onPress : null}
				activeOpacity={disabled ? 1 : 0.7}
			>
				<Image source={imageSource} className='w-10 h-10' />
				<Text className='font-GilroySemibold text-black text-lg mt-2'>
					{text}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create( {

	checked: {
		borderColor: '#007BFF',
	},

	disabledText: {
		color: '#aaa',
	},

	disabled: {
		backgroundColor: '#C9C9C9',
	},

	checkboxContainer: {
		borderWidth: 2,
		borderColor: 'transparent',
		borderRadius: 5,

	},
	additionalContent: {
		backgroundColor: '#f0f0f0',
		padding: 10,
		borderRadius: 5,
	},
} );

export default Card;
