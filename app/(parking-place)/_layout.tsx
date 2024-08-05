import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const ParkingPlacesLayout = () => {
	return (
		<>
			<Stack>
				<Stack.Screen
					name='additional-info'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='available-spaces'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='parking-place'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='ride-now'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='scan-qr'
					options={{ headerShown: false }}
				/>
			</Stack>
			<StatusBar backgroundColor="white" style='dark' />
		</>
	)
}

export default ParkingPlacesLayout
