import { Icons, Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Start({ navigation }) {
	return (
		<SafeAreaView
			className='bg-white h-full'
			edges={{ top: 'maximum', left: 'maximum', right: 'maximum' }}
		>
			<ScrollView>
				<View className='w-full h-72 bg-black rounded-bl-3xl rounded-br-3xl'>
					<View className='py-8 flex flex-row justify-center items-center gap-x-16'>
						<TouchableOpacity
							onPress={() => {}}
							activeOpacity={0.7}
							className={`bg-pill/80 backdrop-blur px-4 py-1 w-44 justify-center rounded-full items-center`}
						>
							<View className='flex flex-row mx-4 items-center justify-center'>
								<Image source={Images.UserPill} className='w-12 h-12' />
								<View className='pl-2'>
									<Text className='font-GilroyMedium text-[#C9C9C9]'>
										Welcome back!
									</Text>
									<Text className='font-GilroyBold text-white text-lg'>
										Admin
									</Text>
								</View>
							</View>
						</TouchableOpacity>
						<View className='flex flex-row gap-x-3'>
							<View className='bg-[#3C3F46] w-10 h-10 rounded-lg flex items-center justify-center'>
								<Image
									source={Icons.Mail}
									className='w-6 h-6'
									tintColor='#969AA5'
								/>
								<View className='absolute w-2 h-2 bg-red-600 rounded-full top-2 right-1.5' />
							</View>
							<View className='bg-[#3C3F46] w-10 h-10 rounded-lg flex items-center justify-center'>
								<Image source={Icons.GrayBell} className='w-6 h-6' />
								<View className='absolute w-2 h-2 bg-red-600 rounded-full top-2 right-2.5' />
							</View>
						</View>
					</View>
					<Text className='text-4xl px-4 font-GilroyMedium pt-5 text-white'>
						Hi! John, <Text className='font-GilroyRegular'>here is</Text> what's
						happening in your parking.
					</Text>
				</View>

				<View className='flex justify-center items-center pt-16'>
					<Text>Additional Information</Text>
				</View>

				<View className='w-full justify-start h-full'>
					{/*barra */}
					<View style={styles.barra}>
						<View style={styles.contenido}>
							<TouchableOpacity
								style={styles.button}
								onPress={() => router.push('start')}
							>
								<Image
									source={Icons.Home}
									style={styles.icons}
									tintColor='#999'
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button}
								onPress={() => router.push('profiles')}
							>
								<Image
									source={Icons.Profile}
									style={styles.icons}
									tintColor='#999'
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button}
								onPress={() => router.push('clients')}
							>
								<Image
									source={Icons.Clients}
									style={styles.icons}
									tintColor='#999'
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button}
								onPress={() => router.push('members')}
							>
								<Image
									source={Icons.UserStar}
									style={styles.icons}
									tintColor='#999'
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.button}
								onPress={() => router.push('register')}
							>
								<Image
									source={Icons.Logs}
									style={styles.icons}
									tintColor='#999'
								/>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	barra: {
		backgroundColor: '#232323',
		width: 325,
		height: 60,
		position: 'absolute',
		bottom: 0,
		alignItems: 'center',
		borderRadius: 20, // Aquí redondeas las esquinas
		justifyContent: 'center',
		left: 27
	},
	contenido: {
		flexDirection: 'row',
		padding: 10
	},
	button: {
		width: '20%'
	},
	icons: {
		position: 'static',
		left: 18,
		width: 24,
		height: 24
	}
})
