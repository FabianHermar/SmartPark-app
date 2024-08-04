import { Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const AdditionalContent = () => {
	return (
		<View className='px-4 mt-10'>
			<Text className='text-2xl font-GilroySemibold'>Most popular car parks</Text>
			<View className='flex flex-row gap-x-4 mt-4'>
				<TouchableOpacity
					onPress={() => router.push( 'parking' )}
					activeOpacity={0.7}
					className='w-[150px] h-[150px] bg-[#EFEFEF] rounded-lg shadow-sm'
				>
					<Image
						source={Images.Parking1}
						className='w-full h-3/4 rounded-t-lg'
					/>
					<View className='px-4 pt-4'>
						<Text className='font-GilroySemibold text-black text-lg'>Parking 1</Text>
						<Text className='font-GilroyRegular text-secondary text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => router.push( 'parking' )}
					activeOpacity={0.7}
					className='w-[150px] h-[150px] bg-[#EFEFEF] rounded-lg shadow-sm'
				>
					<Image
						source={Images.Parking2}
						className='w-full h-3/4 rounded-t-lg'
					/>
					<View className='px-4 pt-4'>
						<Text className='font-GilroySemibold text-black text-lg'>Parking 2</Text>
						<Text className='font-GilroyRegular text-secondary text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default AdditionalContent
