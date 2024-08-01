import DefaultButton from '@/components/DefaultButton'
import FormField from '@/components/FormField'
import Pill from '@/components/Pill'
import { Images } from '@/constants'
import { router } from "expo-router"
import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ForgotPassword = () => {
  const [ form, setForm ] = useState( {
    email: ''
  } )

  const [ isSubmitting, setIsSubmitting ] = useState( false )

  const submit = () => {

  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <Image
          source={Images.BlueGradient4}
          className='w-full h-full absolute -top-48 opacity-80 rotate-180 left-0'
        />
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
            handleChangeText={( e ) => setForm( { ...form, email: e } )}
            otherStyles='py-auto mt-16 mb-56'
            keyboardType='email-address'
          />

          <DefaultButton
            title='Send Code'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPassword