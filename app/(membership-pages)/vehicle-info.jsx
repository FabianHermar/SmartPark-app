import DefaultButton from '@/components/DefaultButton'
import FormField from '@/components/FormField'
import Pill from '@/components/Pill'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const VehicleInfo = () => {
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
			console.log(`[Log] ${message} enviado al servidor`);
		} catch (error) {
			console.error('Error al enviar el log:', error);
		}
	}

	const [form, setForm] = useState({
		brand: '',
		model: '',
		year: '',
		color: '',
		licensePlate: ''
	});

	return (
		<SafeAreaView className='bg-white h-full'>
			<LinearGradient
				colors={['#000', '#0F4F75']}
				start={[0, 0]}
				end={[1, 0]}
				className='absolute top-0 left-0 w-full h-[850px] right-0'
			/>
			<ScrollView>
				<View className='w-full justify-start h-full px-4 pt-10'>
					<View className='pb-6 flex flex-row justify-between items-center'>
						<Pill
							title='Back'
							handlePress={() => {
								sendLogToServer('info', 'Botón "Back" presionado', token);
								router.back();
							}}
							containerStyles='w-16 bg-white/20'
							textStyles='text-white'
							iconColor='#FFF'
						/>
					</View>
					<View className='py-4'>
						<Text className='text-white font-GilroyBold text-4xl'>Member's Vehicle Info</Text>
						<Text className='text-neutral-400 font-GilroyRegular pt-2 text-base'>Please fill the next form with your vehicle info for register.</Text>
					</View>
					<View>
						<FormField
							title='Car Brand'
							placeholder='Toyota'
							value={form.brand}
							handleChangeText={(e) => setForm({ ...form, brand: e })}
							textStyles='text-white'
							otherStyles='my-3'
						/>
						<FormField
							title='Car Model'
							placeholder='Corolla'
							value={form.model}
							handleChangeText={(e) => setForm({ ...form, model: e })}
							textStyles='text-white'
							otherStyles='my-3'
						/>
						<FormField
							title='Car Year'
							placeholder='2019'
							value={form.year}
							handleChangeText={(e) => setForm({ ...form, year: e })}
							textStyles='text-white'
							otherStyles='my-3'
						/>
						<FormField
							title='Car Color'
							placeholder='Black'
							value={form.color}
							handleChangeText={(e) => setForm({ ...form, color: e })}
							textStyles='text-white'
							otherStyles='my-3'
						/>
						<FormField
							title='License Plate'
							placeholder='ABC-123'
							value={form.licensePlate}
							handleChangeText={(e) => setForm({ ...form, licensePlate: e })}
							textStyles='text-white'
							otherStyles='my-3'
						/>
					</View>
					<DefaultButton
						title='Continue'
						handlePress={() => {
							sendLogToServer('info', 'Botón "Continue" presionado', token);
							router.push('payment-method');
						}}
						containerStyles='mt-7'
						isLoading={undefined}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default VehicleInfo