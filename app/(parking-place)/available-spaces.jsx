import DefaultButton from '@/components/DefaultButton'
import Pill from '@/components/Pill'
import SelectedButton from '@/components/SelectedButton'
import { Icons, Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useState } from 'react'
import { ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AvailableSpaces = () => {

	const [selected, setSelected] = useState(null)

	const handleButtonPress = (index) => {
		if (selected === index) {
			setSelected(null)
		} else {
			setSelected(index)
		}
	}

	const buttons = Array.from({ length: 12 }, (_, index) => index)

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
			<Image
				source={Images.BlueGradient6}
				className='w-full h-full absolute -top-[450px] opacity-70 left-0'
			/>
			<ScrollView>
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
						<View className='flex flex-row items-center justify-between'>
							<TouchableWithoutFeedback>
								<Image
									source={Icons.Left}
									className='w-6 h-6'
								/>
							</TouchableWithoutFeedback>
							<View className='justify-center items-center'>
								<Text className='font-GilroySemibold text-4xl'>1st Floor</Text>
								<Text className='text-sm font-GilroyRegular text-secondary'>12 Available</Text>
							</View>
							<TouchableWithoutFeedback>
								<Image
									source={Icons.Right}
									className='w-6 h-6'
								/>
							</TouchableWithoutFeedback>
						</View>
						<View className='flex flex-row justify-between items-center pt-10'>
							<View className='flex items-center'>
								{buttons.slice(0, 6).map((index) => (
									<SelectedButton
										key={index}
										selected={selected === index}
										onPress={() => {
											handleButtonPress(index)
											sendLogToServer('info', `Espacio seleccionado: ${index}`)
										}}
										disabled={selected !== null && selected !== index}
										additionalStyles='border-b-2'
									/>
								))}
							</View>
							<View className='flex items-center transform rotate-180'>
								{buttons.slice(6).map((index) => (
									<SelectedButton
										key={index}
										selected={selected === index}
										onPress={() => {
											handleButtonPress(index)
											sendLogToServer('info', `Espacio seleccionado: ${index}`)
										}}
										disabled={selected !== null && selected !== index}
										additionalStyles='border-b-2'
									/>
								))}
							</View>
						</View>
						<DefaultButton
							title='Continue'
							handlePress={() => {
								sendLogToServer('info', 'Botón "Continue" presionado')
								router.push('scan-qr')
							}}
							containerStyles='mt-6'
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default AvailableSpaces
