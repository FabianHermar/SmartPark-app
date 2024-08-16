import DefaultButton from '@/components/DefaultButton'
import { BlueIcons } from '@/constants'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'
import { SafeAreaView } from 'react-native-safe-area-context'

const MembershipActive = () => {

	const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmUwZTYzODY5OWJmNGU3ZGRlZmFhZSIsImVtYWlsIjoiam9yZ2VAdXRuYS5lZHUubXgiLCJuYW1lcyI6IkVtbWEiLCJsYXN0bmFtZXMiOiJMQSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMzczMTU3NCwiZXhwIjoxNzIzODE3OTc0fQ._8Jfdj_N2QcOAPE9ucPrf1SOQTguernp4_WLSAcKgNU";

	const sendLogToServer = async (level, message, token) => {
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
			console.log(`[Log] ${message} enviado al servidor`)
		} catch (error) {
			console.error('Error al enviar el log:', error);
		}
	}

	return (
		<SafeAreaView className='bg-white h-full'>
			<LinearGradient
				colors={['#000', '#0F4F75']}
				start={[0, 0]}
				end={[1, 0]}
				className='absolute top-0 left-0 w-full h-[850px] right-0'
			/>
			<ScrollView>
				<ConfettiCannon count={100} origin={{ x: 30, y: 0 }} autoStart={true} />
				<View className='w-full justify-start px-4 py-28 h-full'>
					<View className='w-full h-max mb-6 justify-start'>
						<View className='flex justify-start items-center gap-1 flex-row pb-1'>
							<Image source={BlueIcons.Check} className='w-6 h-6' />
							<Text className='text-sm font-GilroyMedium text-white'>
								Membership active!
							</Text>
						</View>
						<Text className='text-3xl font-GilroySemibold text-white py-1'>
							Congratulation John!
						</Text>
						<Text className='text-3xl font-GilroySemibold text-white py-1'>
							You're now a SmartPark+ member.
						</Text>
						<Text className='text-sm font-GilroyRegular text-neutral-400 pb-1'>
							Now you can enjoy all the benefits of SmartPark+ membership.
						</Text>
						<Text className='text-sm font-GilroyRegular text-neutral-400'>
							You can manage your subscription in the membership section.
						</Text>
					</View>

					<DefaultButton
						title='Back to Home'
						handlePress={() => {
							sendLogToServer('info', 'Botón "Back to Home" presionado', token);
							router.replace('home');
						}}
						containerStyles='mt-[300px] border-2 border-white/10'
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default MembershipActive