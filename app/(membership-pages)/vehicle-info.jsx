import DefaultButton from '@/components/DefaultButton'
import FormField from '@/components/FormField'
import Pill from '@/components/Pill'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { jwtDecode } from 'jwt-decode'
import { MEMBERSHIP_BASE_URL } from '../../constants/apiUrls'


const VehicleInfo = () => {

	const [ form, setForm ] = useState( {
		brand: '',
		model: '',
		year: '',
		color: '',
		licensePlate: ''
	} )
	
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	
	
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [error, setError] = useState(null)
	
	useEffect(()=>{
		const fetchToken = async () => {
			try {
				const token = await AsyncStorage.getItem('token')
				const decoded = jwtDecode(token)
				const userName = decoded.names;
				setToken(token);
				setUser(userName);

			} catch (error) {
				console.log('Error retrieving token '+error.message);
			}
		};

		fetchToken();
	}, []);

	const submit = async () => {
		try {
			const response = await fetch(`${MEMBERSHIP_BASE_URL}/new`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`
				},
				body: JSON.stringify({
					clientVehicle: {
						plateNumber: form.licensePlate,
						model: form.model,
						year: form.year,
						color: form.color
					},
					lot: 12,
					isActive: true
				})
			});

			if (!response.ok) {
				throw new Error('Error while registering new membership')
			}

			router.push('payment-method');
			
		} catch (error) {
			console.log(error.message)
			setError(error.message)
		} finally {
			setIsSubmitting(false)
		}
	}
	return (
		<SafeAreaView className='bg-white h-full'>
			<LinearGradient
				colors={[ '#000', '#0F4F75' ]}
				start={[ 0, 0 ]}				end={[ 1, 0 ]}
				className='absolute top-0 left-0 w-full h-[850px] right-0'
			/>
			<ScrollView>
				<View className='w-full justify-start h-full px-4 pt-10'>
					<View className='pb-6 flex flex-row justify-between items-center'>
						<Pill
							title='Back'
							handlePress={() => router.back()}
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
							handleChangeText={( e ) => setForm( { ...form, brand: e } )}
							textStyles='text-white'
							otherStyles='my-3'
						/>
						<FormField
							title='Car Model'
							placeholder='Corolla'
							value={form.model}
							handleChangeText={( e ) => setForm( { ...form, model: e } )}
							textStyles='text-white'
							otherStyles='my-3'
						/>
						<FormField
							title='Car Year'
							placeholder='2019'
							value={form.year}
							handleChangeText={( e ) => setForm( { ...form, year: e } )}
							textStyles='text-white'
							otherStyles='my-3'
						/>
						<FormField
							title='Car Color'
							placeholder='Black'
							value={form.color}
							handleChangeText={( e ) => setForm( { ...form, color: e } )}
							textStyles='text-white'
							otherStyles='my-3'
							keyboardType='email-address'
						/>
						<FormField
							title='License Plate'
							placeholder='ABC-123'
							value={form.licensePlate}
							handleChangeText={( e ) => setForm( { ...form, licensePlate: e } )}
							textStyles='text-white'
							otherStyles='my-3'
							keyboardType='email-address'
						/>
					</View>
					<DefaultButton
						title='Continue'
						handlePress={submit}
						containerStyles='mt-7'
						isLoading={isSubmitting}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default VehicleInfo
