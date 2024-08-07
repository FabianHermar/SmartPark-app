import { Icons } from '@/constants'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, TouchableOpacity } from 'react-native'

const GradientButton = ( { title, handlePress, containerStyles, textStyles } ) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
			activeOpacity={0.6}
			className={`rounded-xl min-h-[70px] w-full justify-center items-center border-2 border-white/5 ${containerStyles}`}
		>
			<LinearGradient
				colors={[ '#0F4F75', '#03253E' ]}
				start={[ 0, 0 ]}
				end={[ 0, 1 ]}
				className='w-full min-h-[70px] items-center justify-center rounded-xl flex flex-row'
			>
				<Text className={`text-white font-GilroySemibold text-xl ${textStyles}`}>{title}</Text>
				<Image
					source={Icons.Right}
					className='w-6 h-6'
					tintColor='#FFF'
				/>
			</LinearGradient>
    </TouchableOpacity>
  )
}

export default GradientButton
