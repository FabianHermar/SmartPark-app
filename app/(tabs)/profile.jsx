import React, { useEffect, useState } from 'react';
import { Icons, Images } from '@/constants';
import { Image } from 'expo-image';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

const UserProfile = () => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	
	useEffect(()=>{
		const fetchToken = async () => {
			try {
				const token = await AsyncStorage.getItem('token')
				const decoded = jwtDecode(token)
				const userName = decoded.names;
				setToken(token);
				setUser(userName);

			} catch (error) {
				console.log('Error retrieving token '+error.message);
			}
		};

		fetchToken();
	}, [])

	const navigation = useNavigation();
	return (
		<SafeAreaView className='bg-white h-full'>
			<ScrollView>
				<View className=" bg-white shadow-lg transform duration-200 ease-in-out">
					<View className="h-32 overflow-hidden relative">
						<Image
							className="w-full h-32"
							source={Images.ProfileHeader}
						/>
					</View>
					<View className="flex justify-center items-center px-5 -mt-12">
						<Image
							className="h-32 w-32 bg-white p-2 rounded-full border-[6px] border-white"
							source={Images.UserPill}
						/>
					</View>
					<View className="text-center px-4 justify-center items-center pt-4">
						<Text className="text-4xl font-GilroyBold">{user}</Text>
						<Text className="mt-2 text-gray-500 text-sm font-GilroyRegular text-center">
							Trail explorer and wildlife lover. Technological geek always looking for the latest news.
						</Text>
					</View>
					<View className='px-4 pt-6'>
						<View className='flex flex-row justify-center items-center gap-x-7'>
							<View className='flex flex-row items-center gap-x-1'>
								<Image
									source={Icons.GrayPin}
									className="w-5 h-5"
								/>
								<Text className='font-GilroyRegular text-sm text-secondary'>San Francisco, CA.</Text>
							</View>
							<View className='flex flex-row items-center gap-x-1'>
								<Image
									source={Icons.GrayCrown}
									className="w-5 h-5"
								/>
								<Text className='font-GilroyRegular text-sm text-secondary'>Membership Active</Text>
							</View>
						</View>
					</View>
					<View>
						<View className='flex flex-row justify-between items-center px-4 pt-8'>
							<TouchableOpacity 
							className='flex flex-col items-center gap-x-1 bg-[#E5E5E5] w-24 h-20 rounded-xl justify-center shadow' 
							activeOpacity={0.6}
							onPress={() => navigation.navigate('QRScanner')}
							>
								<Image
									source={Icons.Tickets}
									className="w-7 h-7"
								/>
								<Text className='font-GilroyMedium text-sm'>Tickets</Text>
							</TouchableOpacity>
							<TouchableOpacity 
							className='flex flex-col items-center gap-x-1 bg-[#E5E5E5] w-24 h-20 rounded-xl justify-center shadow' 
							activeOpacity={0.6}
							onPress={() => navigation.navigate('QRScanner')}
							>
								<Image
									source={Icons.Payment}
									className="w-7 h-7"
								/>
								<Text className='font-GilroyMedium text-sm'>
									Payment
								</Text>
							</TouchableOpacity>
							<TouchableOpacity className='flex flex-col items-center gap-x-1 bg-[#E5E5E5] w-24 h-20 rounded-xl justify-center shadow' activeOpacity={0.6}>
								<Image
									source={Icons.LifeBuoy}
									className="w-7 h-7"
								/>
								<Text className='font-GilroyMedium text-sm'>
									Support
								</Text>
							</TouchableOpacity>
						</View>
						<View>
							<Text className='text-3xl font-GilroySemibold px-4 pt-6'>Last Activity</Text>
							<View className='h-full'>
								{/* Here you need to show the recent activity */}
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default UserProfile;
