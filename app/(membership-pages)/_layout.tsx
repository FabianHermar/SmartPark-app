import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const MembershipPagesLayout = () => {
	return (
		<>
			<Stack>
				<Stack.Screen
					name='membership-active'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='membership-benefits'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='membership-info'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='payment-method'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='vehicle-info'
					options={{ headerShown: false }}
				/>
			</Stack>
			<StatusBar backgroundColor="white" style='light' />
		</>
	)
}

export default MembershipPagesLayout
