import { Images } from '@/constants'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <View className='w-full h-full justify-center px-4'>
          <Image
            source={Images.SmartParkLogo}
            resizeMethod='contain'
            className='w-[200px] h-[35px]'
          />
          <Text className='text-2xl font-GilroyBold text-center'>Sign In</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn