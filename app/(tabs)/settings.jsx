import DefaultButton from '@/components/DefaultButton'
import { Icons, Images } from '@/constants'
import settings from '@/lib/settings'
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
						{settings.map( ( setting, index ) => (
							<View key={index} className='px-4 flex flex-row items-center gap-x-1.5 pb-10'>
								<Image
									source={setting.icon}
									className='w-8 h-8'
									tintColor='#666666'
								/>
								<Text className='text-lg font-GilroyMedium'>{setting.title}</Text>
								<Image
									source={Icons.Down}
									tintColor='#666666'
									className='w-8 h-8'
								/>
							</View>
						) )}
						<DefaultButton 
							title='Log Out'
							handlePress={() => router.replace( 'sign-in' )}
							containerStyles={undefined}
							textStyles='text-lg'
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default Settings
