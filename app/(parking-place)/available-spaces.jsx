import DefaultButton from '@/components/DefaultButton'
import Pill from '@/components/Pill'
import SelectedButton from '@/components/SelectedButton'
import { Icons, Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableWithoutFeedback } from 'react-native-web'

const AvailableSpaces = () => {

	const [ selected, setSelected ] = useState( null )

	const handleButtonPress = ( index ) => {
		if ( selected === index ) {
			setSelected( null )
		} else {
			setSelected( index )
		}
	}

	const buttons = Array.from( { length: 12 }, ( _, index ) => index )

	return (
		<SafeAreaView className='bg-white h-full'>
			<Image
				source={Images.BlueGradient6}
				className='w-full h-full absolute -top-[450px] opacity-70  left-0'
			/>
			<ScrollView>
				<View className='w-full justify-start h-full px-4 pt-10'>
					<View className='pb-6 flex flex-row justify-between items-center'>
						<Pill
							title='Back'
							handlePress={() => router.back()}
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
								{buttons.slice( 0, 6 ).map( ( index ) => (
									<SelectedButton
										key={index}
										selected={selected === index}
										onPress={() => handleButtonPress( index )}
										disabled={selected !== null && selected !== index}
										additionalStyles='border-b-2'
									/>
								) )}
							</View>
							<View className='flex items-center transform rotate-180'>
								{buttons.slice( 6 ).map( ( index ) => (
									<SelectedButton
										key={index}
										selected={selected === index}
										onPress={() => handleButtonPress( index )}
										disabled={selected !== null && selected !== index}
										additionalStyles='border-b-2'
									/>
								) )}
							</View>
						</View>
						<DefaultButton
							title='Continue'
							handlePress={() => router.push( 'scan-qr' )}
							containerStyles='mt-6'
						/>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default AvailableSpaces
