import DefaultButton from '@/components/DefaultButton'
import FormField from '@/components/FormField'
import Pill from '@/components/Pill'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const VehicleInfo = () => {

	const [ form, setForm ] = useState( {
		brand: '',
		model: '',
		year: '',
		color: '',
		licensePlate: ''
	} )

	return (
		<SafeAreaView className='bg-white h-full'>
			<LinearGradient
				colors={[ '#000', '#0F4F75' ]}
				start={[ 0, 0 ]}
				end={[ 1, 0 ]}
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
						handlePress={() => router.push( 'payment-method' )}
						containerStyles='mt-7'
						isLoading={undefined}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default VehicleInfo
