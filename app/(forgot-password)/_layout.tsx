import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='forgot-password'
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar backgroundColor="white" style='dark' />
    </>
  )
}

export default AuthLayout
