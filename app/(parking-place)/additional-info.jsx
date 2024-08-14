import DefaultButton from '@/components/DefaultButton'
import { BlueIcons } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'
import { SafeAreaView } from 'react-native-safe-area-context'

const AdditionalInfo = () => {

	return (
		<SafeAreaView className='bg-white h-full'>
			<ScrollView>
				<ConfettiCannon count={100} origin={{ x: 30, y: 0 }} autoStart={true} />
				<View className='w-full justify-start px-4 py-28 h-full'>
					<View className='w-full h-max mb-6 justify-start'>
						<View className='flex justify-start items-center gap-1 flex-row'>
							<Image source={BlueIcons.Check} className='w-6 h-6' />
							<Text className='text-sm font-GilroyMedium'>Welcome to Sunny Parking Lot</Text>
						</View>
						<Text className='text-4xl pt-2 font-GilroySemibold'>Thanks for choosing us, John!</Text>

					</View>

					

					<DefaultButton
						title='Back to Home'
						handlePress={() => router.replace( 'home' )}
						containerStyles='mt-[415px]'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default AdditionalInfo
