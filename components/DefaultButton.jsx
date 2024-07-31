import { Text, TouchableOpacity } from 'react-native'

const DefaultButton = ( { title, handlePress, containerStyles, textStyles, isLoading } ) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-black rounded-xl min-h-[70px] w-full justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}
    >
      <Text className={`text-white font-GilroySemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default DefaultButton