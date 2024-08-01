import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import DefaultButton from "../components/GradientButton"
import { Images } from "../constants"

export default function Index () {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-start items-start h-full relative'>
          <Image
            source={Images.IndexImage}
            className='w-full h-96 relative'
            resizeMode='contain'
          />
          <View className='px-4'>
            <Image
              source={Images.Logo}
              className='w-28 h-28'
              resizeMode='contain'
            />
            <Text className='text-5xl font-GilroyBold pb-2'>SmartPark</Text>
            <Text className='text-base font-GilroyRegular'>Find and reserve parking in the nearest garages and parking lots.</Text>
          </View>
          <View className='w-full px-4 pt-10'>
            <DefaultButton
              title='Get Started'
              handlePress={() => router.push( '/sign-in' )}
              containerStyles='w-full mt-7'
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="white" style='dark' />
    </SafeAreaView>
  )
}