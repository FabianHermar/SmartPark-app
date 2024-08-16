import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AdminLayout = () => {
	return (
		<>
			<Stack>
				<Stack.Screen
					name='admin'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='clients'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='members'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='profiles'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='register'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='start'
					options={{ headerShown: false }}
				/>
			</Stack>
			<StatusBar backgroundColor="white" style='dark' />
		</>
	)
}

export default AdminLayout
