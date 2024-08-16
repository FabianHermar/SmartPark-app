import DefaultButton from '@/components/DefaultButton'
import { Icons, Images } from '@/constants'
import settings from '@/lib/settings'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { USER_BASE_URL } from '../../constants/apiUrls'

const Settings = () => {
	const [token, setToken] = useState(null)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchToken = async () => {
			try {
				const token = await AsyncStorage.getItem('token')
				setToken(token)
			} catch (error) {
				console.log('Error retrieving token ' + error.message)
			}
		}

		fetchToken();
	}, []);

	const signout = async () => {
		try {
			const response = await fetch(`${USER_BASE_URL}/logout`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				}
			});
			if (!response.ok) {
				throw new Error('Error while signing out');
			}

			await AsyncStorage.removeItem('token');
			router.replace('sign-in');

		} catch (error) {
			setError(error.message);
		}
	}

	return (
		<SafeAreaView
			className='bg-white h-full'
			edges={{ top: 'maximum', left: 'maximum', right: 'maximum' }}
		>
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
						{settings.map((setting, index) => (
							<View
								key={index}
								className='px-4 flex flex-row items-center gap-x-1.5 pb-10'
							>
								<Image
									source={setting.icon}
									className='w-8 h-8'
									tintColor='#666666'
								/>
								<Text className='text-lg font-GilroyMedium'>
									{setting.title}
								</Text>
								<Image
									source={Icons.Down}
									tintColor='#666666'
									className='w-8 h-8'
								/>
							</View>
						))}
						<DefaultButton
							title='Log Out'
							handlePress={signout}
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
