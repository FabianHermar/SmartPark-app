import DefaultButton from '@/components/DefaultButton'
import { Icons, Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Settings = () => {
	return (
		<SafeAreaView className='bg-white h-full' edges={{ top: 'maximum', left: 'maximum', right: 'maximum' }}>
			<ScrollView>
				<Image
					source={Images.BlueGradient8}
					className='w-full h-full absolute -top-56 opacity-80 left-0'
				/>
				<View className='w-full justify-start h-full px-4 pt-10'>
					<View className='pb-16 flex flex-row justify-between items-center'>
						<Text className='text-5xl font-GilroyBold'>Settings</Text>
					</View>
					<View className='w-full h-max mb-6 justify-start'>
						<View className='px-4 flex flex-row items-center gap-x-1.5 pb-10'>
							<Image
								source={Icons.Profile}
								className='w-8 h-8'
								tintColor='#666666'
							/>
							<Text className='text-lg font-GilroyMedium'>Account and Profile</Text>
							<Image
								source={Icons.Down}
								tintColor='#666666'
								className='w-8 h-8'
							/>
						</View>
						<View className='px-4 flex flex-row items-center gap-x-1.5 pb-10'>
							<Image
								source={Icons.Settings}
								className='w-8 h-8'
								tintColor='#666666'
							/>
							<Text className='text-lg font-GilroyMedium'>Application preferences</Text>
							<Image
								source={Icons.Down}
								tintColor='#666666'
								className='w-8 h-8'
							/>
						</View>
						<View className='px-4 flex flex-row items-center gap-x-1.5 pb-10'>
							<Image
								source={Icons.Padlock}
								className='w-8 h-8'
								tintColor='#666666'
							/>
							<Text className='text-lg font-GilroyMedium'>Security</Text>
							<Image
								source={Icons.Down}
								tintColor='#666666'
								className='w-8 h-8'
							/>
						</View>
						<View className='px-4 flex flex-row items-center gap-x-1.5 pb-10'>
							<Image
								source={Icons.Accessible}
								className='w-8 h-8'
								tintColor='#666666'
							/>
							<Text className='text-lg font-GilroyMedium'>Accessibility</Text>
							<Image
								source={Icons.Down}
								tintColor='#666666'
								className='w-8 h-8'
							/>
						</View>
						<View className='px-4 flex flex-row items-center gap-x-1.5 pb-10'>
							<Image
								source={Icons.LifeBuoy}
								className='w-8 h-8'
								tintColor='#666666'
							/>
							<Text className='text-lg font-GilroyMedium'>Help and support</Text>
							<Image
								source={Icons.Down}
								tintColor='#666666'
								className='w-8 h-8'
							/>
						</View>
						<View className='px-4 flex flex-row items-center gap-x-1.5 pb-10'>
							<Image
								source={Icons.Info}
								className='w-8 h-8'
								tintColor='#666666'
							/>
							<Text className='text-lg font-GilroyMedium'>Legal information</Text>
							<Image
								source={Icons.Down}
								tintColor='#666666'
								className='w-8 h-8'
							/>
						</View>
					</View>
					<DefaultButton
						title='Sign Out'
						handlePress={() => router.replace( 'sign-in' )}
						containerStyles='mt-2'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Settings
