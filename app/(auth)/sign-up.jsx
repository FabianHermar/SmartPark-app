import DefaultButton from '@/components/DefaultButton'
import FormField from '@/components/FormField'
import Pill from '@/components/Pill'
import { Images } from '@/constants'
import Checkbox from 'expo-checkbox'
import { Image } from 'expo-image'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { USER_BASE_URL } from '../../constants/apiUrls'

const SignUp = () => {
	const [form, setForm] = useState({
		name: '',
		lastName: '',
		telephone: '',
		email: '',
		password: ''
	})

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isChecked, setChecked] = useState(false)
	const [isChecked2, setChecked2] = useState(false)
	const [error, setError] = useState(null)

	const submit = async () => {
		setIsSubmitting(true)
		setError(null)

		try {
			if (form.email === '' || form.lastName === ''|| form.email === '' || form.telephone === '' || form.password === '') {
				throw new Error('Empty fields!')	
			}

			const response = await fetch(`${USER_BASE_URL}/signup`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					names: form.name,
					lastnames: form.lastName,
					email: form.email,
					phoneNumber: parseInt(form.telephone),
					password: form.password
				})
			})

			if (!response.ok) {
				throw new Error('Invalid credentials!')
			}

			router.push('profile-setup')
		} catch (error) {
			setError(error.message)
		}
	}

	return (
		<SafeAreaView className='bg-white h-full'>
			<ScrollView>
				<Image
					source={Images.BlueGradient2}
					className='w-full h-full absolute -top-72 opacity-80 left-0'
				/>
				<View className='w-full justify-start h-full px-4 pt-10'>
					<View className='pb-6 flex flex-row justify-between items-center'>
						<Pill
							title='Back'
							handlePress={() => router.back('sign-in')}
							containerStyles='w-16'
							textStyles={undefined}
						/>
					</View>
					<View className='w-full h-max mb-6 justify-start'>
						<Image
							source={Images.SmartParkLogo}
							ContentFit='contain'
							className='w-48 h-20'
						/>
						<Text className='text-2xl font-GilroyBold'>Let's Get Started</Text>
						<Text className='text-base font-GilroyRegular text-secondary'>
							Enter your details below to create your account.
						</Text>
					</View>
					<FormField
						title='Name'
						placeholder='John'
						value={form.name}
						handleChangeText={(e) => setForm({ ...form, name: e })}
						otherStyles='mt-6 mb-3'
					/>
					<FormField
						title='Last Name'
						placeholder='Doe'
						value={form.lastName}
						handleChangeText={(e) => setForm({ ...form, lastName: e })}
						otherStyles='my-3'
					/>
					<FormField
						title='Telephone'
						placeholder='222-222-2222'
						value={form.telephone}
						handleChangeText={(e) => setForm({ ...form, telephone: e })}
						otherStyles='my-3'
					/>
					<FormField
						title='Email'
						placeholder='Enter your email'
						value={form.email}
						handleChangeText={(e) => setForm({ ...form, email: e })}
						otherStyles='my-3'
						keyboardType='email-address'
					/>
					<FormField
						title='Password'
						placeholder='********'
						value={form.password}
						handleChangeText={(e) => setForm({ ...form, password: e })}
						otherStyles=''
					/>

					<View className='flex flex-row items-center gap-x-2 pt-4'>
						<Checkbox
							className='rounded-md'
							value={isChecked}
							onValueChange={setChecked}
							color={isChecked ? '#367BFF' : undefined}
						/>
						<Text className='font-GilroyMedium text-secondary text-base'>
							I agree with terms of use.
						</Text>
					</View>
					<View className='flex flex-row items-center gap-x-2 pt-4'>
						<Checkbox
							className='rounded-md'
							value={isChecked2}
							onValueChange={setChecked2}
							color={isChecked2 ? '#367BFF' : undefined}
						/>
						<Text className='font-GilroyMedium text-secondary text-base'>
							I agree to the Terms & Conditions.
						</Text>
					</View>
					{error && <Text className='text-red-500'>{error}</Text>}
					<DefaultButton
						title='Sign In'
						handlePress={submit}
						containerStyles='mt-7'
						isLoading={isSubmitting}
					/>

					<View className='flex flex-row items-center justify-center mt-6'>
						<Text className='text-sm font-GilroyMedium text-secondary'>
							Already Signed?{' '}
						</Text>
						<Link className='text-primary font-GilroyBold' href='/sign-in'>
							Sign In
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default SignUp
