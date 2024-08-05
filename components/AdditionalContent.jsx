import { Icons, Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useEffect, useRef } from 'react'
import { Animated, Text, TouchableOpacity, View } from 'react-native'

const AdditionalContent = ( { isVisible, onAnimationEnd } ) => {
	const fadeAnim = useRef( new Animated.Value( 0 ) ).current

	useEffect( () => {
		if ( isVisible ) {
			Animated.timing( fadeAnim, {
				toValue: 1,
				duration: 150,
				useNativeDriver: true,
			} ).start();
		} else {
			Animated.timing( fadeAnim, {
				toValue: 0,
				duration: 150,
				useNativeDriver: true,
			} ).start( () => {
				if ( onAnimationEnd ) {
					onAnimationEnd();
				}
			} );
		}
	}, [ isVisible, fadeAnim, onAnimationEnd ] );

	return (
		<Animated.View className='px-4 mt-8' style={{ opacity: fadeAnim }}>
			<Text className='text-2xl font-GilroySemibold'>Most popular car parks</Text>
			<View className='flex flex-row gap-x-4 mt-4'>
				<TouchableOpacity
					onPress={() => router.push( '/parking-place' )}
					activeOpacity={0.7}
					className='w-[180px] h-[140px] bg-[#EFEFEF] rounded-lg shadow-sm'
				>
					<View className='px-3 pt-3'>
						<View className='flex flex-row items-center justify-between'>
							<Text className='font-GilroySemibold text-black text-base'>Sunny Parking Lot</Text>
							<Image source={Icons.Right} className='w-4 h-4' />
						</View>
						<Text className='font-GilroyMedium text-primary text-xs'>1km - $3.00/h</Text>
					<Image
							source={Images.Map}
							className='w-[100%] h-[65%] mt-0.5 rounded-lg shadow shadow-black'
							contentFit='cover'
						/>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => router.push( 'parking' )}
					activeOpacity={0.7}
					className='w-[180px] h-[140px] bg-[#EFEFEF] rounded-lg shadow-sm'
				>
					<View className='px-3 pt-3'>
						<View className='flex flex-row items-center justify-between'>
							<Text className='font-GilroySemibold text-black text-base'>Central Parking</Text>
							<Image source={Icons.Right} className='w-4 h-4' />
						</View>
						<Text className='font-GilroyMedium text-primary text-xs'>5km - $6.00/h</Text>
						<Image
							source={Images.Map}
							className='w-[100%] h-[65%] mt-0.5 rounded-lg shadow shadow-black'
							contentFit='cover'
						/>
					</View>
				</TouchableOpacity>
			</View>
		</Animated.View>
	)
}

export default AdditionalContent
