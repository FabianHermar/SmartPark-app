import Pill from '@/components/Pill'
import { router } from 'expo-router'
import React, { useEffect, useState } from 'react'
import {
	ActivityIndicator,
	ScrollView,
	StyleSheet,
	Text,
	View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { USER_BASE_URL } from '../../constants/apiUrls'

const Clients = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)
	const [token, setToken] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const token = await AsyncStorage.getItem('token')
			setToken(token)
			try {
				const response = await fetch(`${USER_BASE_URL}/list`, {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`
					}
				})
				const result = await response.json()
				setData(result)
				setLoading(false)
			} catch (error) {
				console.error('Error fetching data:', error)
				setLoading(false)
			}
		}

		fetchData()
	}, [])

	if (loading) {
		return (
			<View style={styles.loaderContainer}>
				<ActivityIndicator size='large' color='#367BFF' />
			</View>
		)
	}

	return (
		<SafeAreaView className='bg-white h-full'>
			<ScrollView>
				<View className='flex p-4 bg-white'>
					<View className='pb-6 flex flex-row justify-between items-center'>
						<Pill
							title='Back'
							handlePress={() => router.back()}
							containerStyles='w-16'
							textStyles={undefined}
						/>
					</View>
					<Text className='text-4xl pb-4 font-GilroySemibold text-center'>
						Clients
					</Text>
					<ScrollView horizontal={true}>
						<View>
							{/* Table Header */}
							<View className='flex-row'>
								<View style={styles.headerCell}>
									<Text>User ID</Text>
								</View>
								<View style={styles.headerCell}>
									<Text>Names</Text>
								</View>
								<View style={styles.headerCell}>
									<Text>Last Names</Text>
								</View>
								<View style={styles.headerCell}>
									<Text>Email</Text>
								</View>
							</View>

							{/* Data Rows */}
							{data.map((post, index) => (
								!post.isAdmin &&
								<View key={index} style={styles.row}>
									<View style={styles.cell}>
										<Text>{post._id}</Text>
									</View>
									<View style={styles.cellColor}>
										<Text>{post.names}</Text>
									</View>
									<View style={styles.cell}>
										<Text
											numberOfLines={1}
											ellipsizeMode='tail'
										>
											{post.lastnames}
										</Text>
									</View>
									<View style={styles.cellColor}>
										<Text
											numberOfLines={1}
											ellipsizeMode='tail'
										>
											{post.email}
										</Text>
									</View>
								</View>
							))}
						</View>
					</ScrollView>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#fff'
	},
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	truncate: {
		fontSize: 16,
		width: 100
	},
	row: {
		flexDirection: 'row'
	},
	headerCell: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#000',
		width: 250,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f8f8f8'
	},
	cell: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#ddd',
		width: 250,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cellColor: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#ccc',
		width: 250,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6dd5faaa'
	}
})

export default Clients
