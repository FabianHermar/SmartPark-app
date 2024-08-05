import { BlueIcons } from '@/constants';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const SelectableButtonLeft = ( { selected, onPress, disabled, additionalStyles } ) => {

	return (
		<TouchableOpacity className={`flex flex-row justify-start items-center p-3 border-t-2 border-l-2 border-black w-36 h-24 ${additionalStyles}`} onPress={onPress} activeOpacity={0.7} disabled={disabled}>
			{selected ? (
				<LinearGradient
					colors={[ '#98bcff', '#FFF' ]}
					start={[ 0, 0 ]}
					end={[ 1, 0 ]}
					className='flex flex-row justify-center items-center p-3 rounded-xl'
				>
					<Image source={BlueIcons.Check} className='w-6 h-6 mr-1' />
					<Text className='font-GilroyMedium text-xl text-black'>Selected</Text>
				</LinearGradient>
			) : (
				<View className='flex flex-row justify-center items-center p-3 rounded-xl'>
					<Text></Text>
				</View>
			)}
		</TouchableOpacity>
	);
};


export default SelectableButtonLeft;
