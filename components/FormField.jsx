import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Icons } from '@/constants'

const FormField = ( { title, value, placeholder, handleChangeText, otherStyles, ...props } ) => {

  const [ showPassword, setShowPassword ] = useState( false )
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base font-GilroySemibold'>{title}</Text>
      <View className='w-full h-14 px-4 bg-white/10 backdrop-blur border-2 border-border rounded-xl items-center focus:border-primary flex-row justify-around'>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#CECECE'}
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          className='w-full h-full font-GilroyRegular items-center justify-center'
          {...props}
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword( !showPassword )}>
            <Image
              source={!showPassword ? Icons.Eye : Icons.EyeOff}
              resizeMode='contain'
              className='w-6 h-6'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField