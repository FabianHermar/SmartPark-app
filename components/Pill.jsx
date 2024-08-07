import { Icons } from '@/constants'
import { Image } from 'expo-image'
import { Text, TouchableOpacity, View } from 'react-native'

const Pill = ( { title, handlePress, containerStyles, textStyles, isLoading, iconColor } ) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
			className={`bg-black/10 backdrop-blur px-4 py-2 w-20 justify-center rounded-full items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
    >
      <View className='flex flex-row gap-0.5 items-center justify-center'>
        <Image
          source={Icons.Left}
          className='w-4 h-4 text-secondary'
					tintColor={iconColor}
        />
        <Text className={`text-secondary font-GilroySemibold text-xs ${textStyles}`}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Pill
