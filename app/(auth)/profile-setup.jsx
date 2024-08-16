import DefaultButton from '@/components/DefaultButton'
import { BlueIcons, Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import ConfettiCannon from 'react-native-confetti-cannon'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileSetup = () => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmUwZTYzODY5OWJmNGU3ZGRlZmFhZSIsImVtYWlsIjoiam9yZ2VAdXRuYS5lZHUubXgiLCJuYW1lcyI6IkVtbWEiLCJsYXN0bmFtZXMiOiJMQSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMzczMTU3NCwiZXhwIjoxNzIzODE3OTc0fQ._8Jfdj_N2QcOAPE9ucPrf1SOQTguernp4_WLSAcKgNU";

  const sendLogToServer = async (level, message, token) => {
    try {
      await fetch('https://parkease-backend.onrender.com/api/v1/user/logs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          level: level,
          message: message,
        }),
      });
      console.log(`[Log] ${message} enviado al servidor`)
    } catch (error) {
      console.error('Error al enviar el log:', error);
    }
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <ConfettiCannon count={100} origin={{ x: 30, y: 0 }} autoStart={true} />
        <Image
          source={Images.BlueGradient4}
          className='w-full h-full absolute -top-56 opacity-80 rotate-180 left-0 -z-20'
        />
        <View className='w-full justify-start px-4 py-28 h-full'>
          <View className='w-full h-max mb-6 justify-start'>
            <View className='flex justify-start items-center gap-1 flex-row'>
              <Image source={BlueIcons.Check} className='w-6 h-6' />
              <Text className='text-sm font-GilroyMedium'>Profile set up!</Text>
            </View>
            <Text className='text-3xl font-GilroySemibold'>Congrats John!</Text>
            <Text className='text-3xl font-GilroySemibold'>You’re set to start</Text>
            <Text className='text-sm font-GilroyRegular'>Thank you for choosing us.</Text>
          </View>

          <DefaultButton
            title='Back to Sign In'
            handlePress={() => {
              sendLogToServer('info', 'Botón "Back to Sign In" presionado', token);
              router.replace('sign-in');
            }}
            containerStyles='mt-[415px]'
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileSetup
