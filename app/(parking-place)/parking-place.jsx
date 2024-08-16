import Pill from '@/components/Pill'
import { Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ParkingPlace = () => {

	const sendLogToServer = async (level, message) => {
		const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmUwZTYzODY5OWJmNGU3ZGRlZmFhZSIsImVtYWlsIjoiam9yZ2VAdXRuYS5lZHUubXgiLCJuYW1lcyI6IkVtbWEiLCJsYXN0bmFtZXMiOiJMQSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMzczMTU3NCwiZXhwIjoxNzIzODE3OTc0fQ._8Jfdj_N2QcOAPE9ucPrf1SOQTguernp4_WLSAcKgNU";
		try {
			await fetch('https://parkease-backend.onrender.com/api/v1/user/logs', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				},
				body: JSON.stringify({
					level: level,
					message: message,
				}),
			});
			console.log(`[Log] ${message} enviado al servidor`);
		} catch (error) {
			console.error('Error al enviar el log:', error);
		}
	}

	return (
		<SafeAreaView className='bg-white h-full'>
			<ScrollView>
				<Image
					source={Images.BlueGradient2}
					className='w-full h-full absolute -top-48 opacity-70 left-0'
				/>
				<View className='w-full justify-start h-full px-4 pt-10'>
					<View className='pb-6 flex flex-row justify-between items-center'>
						<Pill
							title='Back'
							handlePress={() => {
								sendLogToServer('info', 'Botón "Back" presionado')
								router.back()
							}}
							containerStyles='w-16'
							textStyles={undefined}
							isLoading={undefined}
						/>
					</View>
					<View>
						<Text className='text-3xl font-GilroyBold'>Where would you like to park?</Text>
						<View className='pt-6'>
							<TouchableOpacity
								className='bg-black rounded-xl mb-5'
								activeOpacity={0.8}
								onPress={() => {
									sendLogToServer('info', 'Seleccionado "Floor 1"')
									router.push('available-spaces')
								}}
							>
								<View className='flex flex-col items-center justify-center'>
									<Image
										source={Images.Floor1}
										className='w-full h-[150px] text-secondary relative opacity-70 rounded-xl'
									/>
									<Text className={`text-white absolute top-8 font-GilroySemibold text-2xl`}>Floor 1</Text>
									<Text className={`text-white absolute bottom-9 font-GilroySemibold text-5xl`}>12/12 lots</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								className='bg-black rounded-xl mb-5'
								activeOpacity={0.8}
								onPress={() => sendLogToServer('info', 'Seleccionado "Floor 2"')}
							>
								<View className='flex flex-col items-center justify-center'>
									<Image
										source={Images.Floor2}
										className='w-full h-[150px] text-secondary relative opacity-70 rounded-xl'
									/>
									<Text className={`text-white absolute top-8 font-GilroySemibold text-2xl`}>Floor 2</Text>
									<Text className={`text-white absolute bottom-9 font-GilroySemibold text-5xl`}>12/12 lots</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity
								className='bg-black rounded-xl mb-5'
								activeOpacity={0.8}
								onPress={() => sendLogToServer('info', 'Seleccionado "Basement"')}
							>
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
