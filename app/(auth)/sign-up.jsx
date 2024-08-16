import DefaultButton from '@/components/DefaultButton'
import FormField from '@/components/FormField'
import Pill from '@/components/Pill'
import { Images } from '@/constants'
import Checkbox from 'expo-checkbox'
import { Image } from 'expo-image'
import { Link, router } from "expo-router"
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    lastName: '',
    telephone: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isChecked, setChecked] = useState(false);
  const [isChecked2, setChecked2] = useState(false);

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

  const handleChangeText = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const submit = () => {
    const logMessage = `Formulario de registro enviado con los datos: ${JSON.stringify(form)}`;
    sendLogToServer('info', logMessage, token)
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      sendLogToServer('info', 'Formulario de registro procesado exitosamente', token)
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <Image
          source={Images.BlueGradient2}
          className='w-full h-full absolute -top-72 opacity-80 left-0'
        />
        <View className='w-full justify-start h-full px-4 pt-10'>
          <View className='pb-6 flex flex-row justify-between items-center'>
            <Pill
              title='Back'
              handlePress={() => {
                sendLogToServer('info', 'Botón "Back" presionado', token);
                router.back('sign-in')
              }}
              containerStyles='w-16'
              textStyles={undefined}
            />
          </View>
          <View className='w-full h-max mb-6 justify-start'>
            <Image
              source={Images.SmartParkLogo}
              contentFit='contain'
              className='w-48 h-20'
            />
            <Text className='text-2xl font-GilroyBold'>Let's Get Started</Text>
            <Text className='text-base font-GilroyRegular text-secondary'>Enter your details below to create your account.</Text>
          </View>
          <FormField
            title='Name'
            placeholder='John'
            value={form.name}
            handleChangeText={(e) => handleChangeText('name', e)}
            otherStyles='mt-6 mb-3'
          />
          <FormField
            title='Last Name'
            placeholder='Doe'
            value={form.lastName}
            handleChangeText={(e) => handleChangeText('lastName', e)}
            otherStyles='my-3'
          />
          <FormField
            title='Telephone'
            placeholder='222-222-2222'
            value={form.telephone}
            handleChangeText={(e) => handleChangeText('telephone', e)}
            otherStyles='my-3'
          />
          <FormField
            title='Email'
            placeholder='Enter your email'
            value={form.email}
            handleChangeText={(e) => handleChangeText('email', e)}
            otherStyles='my-3'
            keyboardType='email-address'
          />
          <FormField
            title='Password'
            placeholder='********'
            value={form.password}
            handleChangeText={(e) => handleChangeText('password', e)}
            otherStyles=''
          />

          <View className='flex flex-row items-center gap-x-2 pt-4'>
            <Checkbox
              className='rounded-md'
              value={isChecked}
              onValueChange={(newValue) => {
                setChecked(newValue);
                sendLogToServer('info', `Checkbox 1 ${newValue ? 'checked' : 'unchecked'}`, token);
              }}
              color={isChecked ? '#367BFF' : undefined}
            />
            <Text className='font-GilroyMedium text-secondary text-base'>I agree with terms of use.</Text>
          </View>
          <View className='flex flex-row items-center gap-x-2 pt-4'>
            <Checkbox
              className='rounded-md'
              value={isChecked2}
              onValueChange={(newValue) => {
                setChecked2(newValue);
                sendLogToServer('info', `Checkbox 2 ${newValue ? 'checked' : 'unchecked'}`, token);
              }}
              color={isChecked2 ? '#367BFF' : undefined}
            />
            <Text className='font-GilroyMedium text-secondary text-base'>I agree to the Terms & Conditions.</Text>
          </View>

          <DefaultButton
            title='Sign In'
            handlePress={() => {
              sendLogToServer('info', 'Botón "Sign In" presionado', token);
              submit();
            }}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />

          <View className='flex justify-center items-center pt-4 gap-y-2'>
            <Text className='text-secondary font-GilroyRegular text-center'>This link is only for testing the views of the other pages, remove it when necessary.</Text>
            <Link className='text-primary font-GilroyBold bg-neutral-300 px-3 py-1' href='/profile-setup'>Next page</Link>
          </View>

          <View className='flex flex-row items-center justify-center mt-6'>
            <Text className='text-sm font-GilroyMedium text-secondary'>Already Signed?{' '}</Text>
            <Link className='text-primary font-GilroyBold' href='/sign-in'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
