import Pill from '@/components/Pill'
import { Icons, Images } from '@/constants'
import { Image } from 'expo-image'
import { router } from 'expo-router'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const AdminProfile = () => {
	return (
		<SafeAreaView className='bg-white h-full'>
			<ScrollView>
				<View className=' bg-white shadow-lg transform duration-200 ease-in-out'>
					<Pill
						title='Back'
						handlePress={() => router.back()}
						containerStyles='w-16 absolute z-20 top-4 left-4'
						textStyles='text-white'
						iconColor='#FFF'
					/>
					<View className='h-32 overflow-hidden relative'>
						<Image className='w-full h-32' source={Images.ProfileHeader} />
					</View>
					<View className='flex justify-center items-center px-5 -mt-12'>
						<Image
							className='h-32 w-32 bg-white p-2 rounded-full border-[6px] border-white'
							source={Images.UserPill}
						/>
					</View>
					<View className='text-center px-4 justify-center items-center pt-4'>
						<Text className='text-4xl font-GilroyBold'>John Doe</Text>
						<Text className='mt-2 text-gray-500 text-sm font-GilroyRegular text-center'>
							Trail explorer and wildlife lover. Technological geek always
							looking for the latest news.
						</Text>
					</View>
					<View className='px-4 pt-6'>
						<View className='flex flex-row justify-center items-center gap-x-7'>
							<View className='flex flex-row items-center gap-x-1'>
								<Image source={Icons.GrayPin} className='w-5 h-5' />
								<Text className='font-GilroyRegular text-sm text-secondary'>
									San Francisco, CA.
								</Text>
							</View>
							<View className='flex flex-row items-center gap-x-1'>
								<Image source={Icons.GrayCrown} className='w-5 h-5' />
								<Text className='font-GilroyRegular text-sm text-secondary'>
									Superadministrator
								</Text>
							</View>
						</View>
						<View className='flex flex-row justify-center items-center gap-x-7 pt-4 pb-10'>
							<View className='flex flex-row items-center gap-x-1'>
								<Image
									source={Icons.Phone}
									className='w-5 h-5'
									tintColor='#666'
								/>
								<Text className='font-GilroyRegular text-sm text-secondary'>
									222-222-2222
								</Text>
							</View>
							<View className='flex flex-row items-center gap-x-1'>
								<Image
									source={Icons.Mail}
									className='w-5 h-5'
									tintColor='#666'
								/>
								<Text className='font-GilroyRegular text-sm text-secondary'>
									johndoe@email.com
								</Text>
							</View>
						</View>
					</View>
					<View>
						<View>
							<Text className='text-3xl font-GilroySemibold px-4 pt-6'>
								Last Activity
							</Text>
							<View className='h-full'>
								{/* Here you need to show the recent activity (last LOGS) */}
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default AdminProfile
