import DefaultButton from '@/components/DefaultButton'
import FormField from '@/components/FormField'
import Pill from '@/components/Pill'
import { Images } from '@/constants'
import { Link, router } from "expo-router"
import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  const [ form, setForm ] = useState( {
    email: '',
    password: ''
  } )

  const [ isSubmitting, setIsSubmitting ] = useState( false )

  const submit = () => {

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
              handlePress={() => router.back()}
              containerStyles='w-16'
              textStyles={undefined}
              isLoading={undefined}
            />
            <TouchableWithoutFeedback onPress={() => router.push( 'forgot-password' )}>
              <Text className='text-secondary font-GilroySemibold'>Forgot Password?</Text>
            </TouchableWithoutFeedback>
          </View>
          <View className='w-full h-max mb-6 justify-start'>
            <Image
              source={Images.SmartParkLogo}
              resizeMode='contain'
              className='w-48 w- h-20'
            />
            <Text className='text-2xl font-GilroyBold'>Sign In to your account</Text>
          </View>
          <FormField
            title='Email'
            placeholder='Enter your email'
            value={form.email}
            handleChangeText={( e ) => setForm( { ...form, email: e } )}
            otherStyles='my-6'
            keyboardType='email-address'
          />
          <FormField
            title='Password'
            placeholder='********'
            value={form.password}
            handleChangeText={( e ) => setForm( { ...form, password: e } )}
            otherStyles='my-6 pb-24'
          />

          <DefaultButton
            title='Sign In'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />
          <View className='flex flex-row items-center justify-center mt-6'>
            <Text className='text-sm font-GilroyMedium text-secondary'>Don't have an account?{' '}</Text>
            <Link className='text-primary font-GilroyBold' href='/sign-up'>Sign Up</Link>
          </View>

					<View className='flex justify-center items-center pt-4 gap-y-2'>
						<Text className='text-secondary font-GilroyRegular text-center'>This link is only for testing the views of the other pages, remove it when necessary.</Text>
						<Link className='text-primary font-GilroyBold bg-neutral-300 px-3 py-1' href='/home'>Next page</Link>
					</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
