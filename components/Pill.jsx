import { Icons } from '@/constants'
import { BlurView } from 'expo-blur'
import { Image } from 'expo-image'
import { Text, TouchableOpacity, View } from 'react-native'

const Pill = ({
	title,
	handlePress,
	containerStyles,
	textStyles,
	iconColor
}) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			activeOpacity={0.7}
			className={`px-4 py-2 justify-center rounded-full items-center ${containerStyles}`}
		>
			<BlurView
				style={{ borderRadius: 20, overflow: 'hidden' }}
				className='bg-[#111111]/5 w-16 px-4 py-2 items-center justify-center'
				intensity={20}
			>
				<View className='flex flex-row gap-0.5 items-center justify-center'>
					<Image
						source={Icons.Left}
						className='w-4 h-4 text-secondary'
						tintColor={iconColor}
					/>
					<Text
						className={`text-secondary font-GilroySemibold text-xs ${textStyles}`}
					>
						{title}
					</Text>
				</View>
			</BlurView>
		</TouchableOpacity>
	)
}

export default Pill
