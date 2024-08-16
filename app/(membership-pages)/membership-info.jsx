import DefaultButton from '@/components/DefaultButton'
import FormField from '@/components/FormField'
import Pill from '@/components/Pill'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const MembershipInfo = () => {

	const [form, setForm] = useState({
		name: '',
		lastName: '',
		telephone: '',
		email: '',
		password: ''
	})

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
						<Text className='text-white font-GilroyBold text-4xl'>Member's Info</Text>
						<Text className='text-neutral-400 font-GilroyRegular pt-2 text-base'>Please make sure your information is correct before registering.</Text>
					</View>
					<View>
						<FormField
							title='Name'
							placeholder='John'
							value={form.name}
							handleChangeText={(e) => setForm({ ...form, name: e })}
							textStyles='text-white'
							otherStyles='my-3'
						/>
						<FormField
							title='Last Name'
							placeholder='Doe'
							value={form.lastName}
							handleChangeText={(e) => setForm({ ...form, lastName: e })}
							textStyles='text-white'
							otherStyles='my-3'
						/>
						<FormField
							title='Telephone'
							placeholder='222-555-5555'
							value={form.telephone}
							handleChangeText={(e) => setForm({ ...form, telephone: e })}
							textStyles='text-white'
							otherStyles='my-3'
						/>
						<FormField
							title='Email'
							placeholder='Enter your email'
							value={form.email}
							handleChangeText={(e) => setForm({ ...form, email: e })}
							textStyles='text-white'
							otherStyles='my-3'
							keyboardType='email-address'
						/>
					</View>
					<DefaultButton
						title='Continue'
						handlePress={() => {
							sendLogToServer('info', 'Botón "Continue" presionado', token);
							router.push('vehicle-info');
						}}
						containerStyles='mt-7'
						isLoading={undefined}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default MembershipInfo