import Pill from '@/components/Pill'
import { Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ParkingPlace = () => {
	return (
		<SafeAreaView className='bg-white h-full'>
			<ScrollView>
				<Image
					source={Images.BlueGradient2}
					className='w-full h-full absolute -top-48 opacity-80  left-0'
				/>
				<View className='w-full justify-start h-full px-4 pt-10'>
					<View className='pb-6 flex flex-row justify-between items-center'>
						<Pill
							title='Back'
							handlePress={() => router.back()}
							containerStyles='w-16'
							textStyles={undefined}
							isLoading={undefined}
						/>
					</View>
					<View>
						<Text className='text-3xl font-GilroyBold'>Where would you like to park?</Text>
						<View className='pt-6'>
							<TouchableOpacity className='bg-black rounded-xl mb-5' activeOpacity={0.8} onPress={() => router.push( 'available-spaces' )}>
								<View className='flex flex-col items-center justify-center'>
									<Image
										source={Images.Floor1}
										className='w-full h-[150px] text-secondary relative opacity-70 rounded-xl'
									/>
									<Text className={`text-white absolute top-8 font-GilroySemibold text-2xl`}>Floor 1</Text>
									<Text className={`text-white absolute bottom-9 font-GilroySemibold text-5xl`}>12/12 lots</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity className='bg-black rounded-xl mb-5' activeOpacity={0.8}>
								<View className='flex flex-col items-center justify-center'>
									<Image
										source={Images.Floor2}
										className='w-full h-[150px] text-secondary relative opacity-70 rounded-xl'
									/>
									<Text className={`text-white absolute top-8 font-GilroySemibold text-2xl`}>Floor 2</Text>
									<Text className={`text-white absolute bottom-9 font-GilroySemibold text-5xl`}>12/12 lots</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity className='bg-black rounded-xl mb-5' activeOpacity={0.8}>
								<View className='flex flex-col items-center justify-center'>
									<Image
										source={Images.Basement}
										className='w-full h-[150px] text-secondary relative opacity-70 rounded-xl'
									/>
									<Text className={`text-white absolute top-8 font-GilroySemibold text-2xl`}>Basement</Text>
									<Text className={`text-white absolute bottom-9 font-GilroySemibold text-5xl`}>12/12 lots</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default ParkingPlace
