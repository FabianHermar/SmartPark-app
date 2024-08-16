import DefaultButton from '@/components/DefaultButton'
import FormField from '@/components/FormField'
import Pill from '@/components/Pill'
import { Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from "expo-router"
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ForgotPassword = () => {
  const [form, setForm] = useState({
    email: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleChangeText = (value) => {
    setForm({ ...form, email: value })
  }

  const submit = () => {
    const logMessage = `Solicitud de restablecimiento de contraseña enviada con email: ${form.email}`;
    sendLogToServer('info', logMessage, token)
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      sendLogToServer('info', 'Código de verificación enviado exitosamente', token)
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <Image
          source={Images.BlueGradient4}
          className='w-full h-full absolute -top-56 opacity-80 rotate-180 left-0'
        />
        <View className='w-full justify-start h-full px-4 pt-10'>
          <View className='pb-6 flex flex-row justify-between items-center'>
            <Pill
              title='Back'
              handlePress={() => {
                sendLogToServer('info', 'Botón "Back" presionado', token);
                router.back();
              }}
              containerStyles='w-16'
              textStyles={undefined}
              isLoading={undefined}
            />
          </View>
          <View>
            <Image
              source={Images.SmartParkLogo}
              resizeMode='contain'
              className='w-48 h-20'
            />
            <Text className='text-2xl font-GilroyBold'>Forgot Password</Text>
            <Text className='text-base text-secondary font-GilroyRegular'>Please enter your email address to receive a verification code.</Text>
          </View>
          <FormField
            title='Email'
            placeholder='Enter your email'
            value={form.email}
            handleChangeText={(e) => handleChangeText(e)}
            otherStyles='py-auto mt-16 mb-56'
            keyboardType='email-address'
          />

          <DefaultButton
            title='Send Code'
            handlePress={() => {
              sendLogToServer('info', 'Botón "Send Code" presionado', token);
              submit();
            }}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword