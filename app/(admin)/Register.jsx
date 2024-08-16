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

const ActivityLog = () => {
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://jsonplaceholder.typicode.com/posts'
				)
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
						Activity Log
					</Text>
					<ScrollView horizontal={true}>
						<View>
							{/* Table Header */}
							<View className='flex-row'>
								<View style={styles.headerCell}>
									<Text>User ID</Text>
								</View>
								<View style={styles.headerCell}>
									<Text>ID</Text>
								</View>
								<View style={styles.headerCell}>
									<Text>Title</Text>
								</View>
								<View style={styles.headerCell}>
									<Text>Body</Text>
								</View>
							</View>

							{/* Data Rows */}
							{data.map((post, index) => (
								<View key={index} style={styles.row}>
									<View style={styles.cell}>
										<Text>{post.userId}</Text>
									</View>
									<View style={styles.cellColor}>
										<Text>{post.id}</Text>
									</View>
									<View style={styles.cell}>
										<Text
											numberOfLines={1}
											ellipsizeMode='tail'
											style={styles.truncate}
										>
											{post.title}
										</Text>
									</View>
									<View style={styles.cellColor}>
										<Text
											numberOfLines={1}
											ellipsizeMode='tail'
											style={styles.truncate}
										>
											{post.body}
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
		minWidth: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f8f8f8'
	},
	cell: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#ddd',
		minWidth: 150,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cellColor: {
		padding: 10,
		borderWidth: 1,
		borderColor: '#ccc',
		minWidth: 150,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#6dd5faaa'
	}
})

export default ActivityLog
