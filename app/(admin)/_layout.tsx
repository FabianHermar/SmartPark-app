import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const AdminLayout = () => {
	return (
		<>
			<Stack>
				<Stack.Screen name='Admin' options={{ headerShown: false }} />
				<Stack.Screen name='Clients' options={{ headerShown: false }} />
				<Stack.Screen name='members' options={{ headerShown: false }} />
				<Stack.Screen name='profiles' options={{ headerShown: false }} />
				<Stack.Screen name='Register' options={{ headerShown: false }} />
				<Stack.Screen name='Start' options={{ headerShown: false }} />
				<Stack.Screen name='admin-settings' options={{ headerShown: false }} />
			</Stack>
			<StatusBar backgroundColor='white' style='dark' />
		</>
	)
}

export default AdminLayout
