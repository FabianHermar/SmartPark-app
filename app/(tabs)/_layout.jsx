import { Icons } from '@/constants'
import { Image } from 'expo-image'
import { Tabs } from 'expo-router'
import { Text, View } from 'react-native'

const TabIcon = ( { icon, color, name, focused } ) => {
	return (
		<View className='flex items-center justify-center flex-col gap-0.5'>
			<Image
				source={icon}
				contentFit='contain'
				tintColor={color}
				className='w-6 h-6'
			/>
			<Text style={{ color: color }} className={`${focused ? 'font-GilroySemibold' : 'font-GilroyRegular'} text-xs`}>
				{name}
			</Text>
		</View>
	)
}

const TabsLayout = () => {
	return (
		<>
			<Tabs
				screenOptions={{
					tabBarShowLabel: false,
					tabBarActiveTintColor: '#367BFF',
					tabBarInactiveTintColor: '#999999',
					tabBarStyle: {
						backgroundColor: '#232323',
					}
				}}
			>

				<Tabs.Screen
					name='home'
					options={{
						headerShown: false,
						title: 'Home',
						tabBarIcon: ( { color, focused } ) => (
							<TabIcon
								icon={Icons.Home}
								color={color}
								name='Home'
								focused={focused}
							/>
						)
					}}
				/>

				<Tabs.Screen
					name='maps'
					options={{
						headerShown: false,
						title: 'Maps',
						tabBarIcon: ( { color, focused } ) => (
							<TabIcon
								icon={Icons.Map}
								color={color}
								name='Maps'
								focused={focused}
							/>
						)
					}}
				/>

				<Tabs.Screen
					name='membership'
					options={{
						headerShown: false,
						title: 'Membership',
						tabBarIcon: ( { color, focused } ) => (
							<TabIcon
								icon={Icons.Diamond}
								color={color}
								name='Membership'
								focused={focused}
							/>
						)
					}}
				/>

				<Tabs.Screen
					name='profile'
					options={{
						headerShown: false,
						title: 'Profile',
						tabBarIcon: ( { color, focused } ) => (
							<TabIcon
								icon={Icons.Profile}
								color={color}
								name='Profile'
								focused={focused}
							/>
						)
					}}
				/>

				<Tabs.Screen
					name='settings'
					options={{
						headerShown: false,
						title: 'Settings',
						tabBarIcon: ( { color, focused } ) => (
							<TabIcon
								icon={Icons.Settings}
								color={color}
								name='Settings'
								focused={focused}
							/>
						)
					}}
				/>
			</Tabs>
		</>
	)
}

export default TabsLayout
