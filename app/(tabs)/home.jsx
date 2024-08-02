import { Icons, Images } from "@/constants";
import { Image } from 'expo-image';
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserIndex () {
	return (
		<SafeAreaView className='bg-white h-full'>
			<ScrollView contentContainerStyle={{ height: '100%' }}>
				<View className='bg-black w-full h-[300px]'>
					<View className='py-8 flex flex-row justify-center items-center gap-x-32'>
						<TouchableOpacity
							onPress={() => router.push( 'profile' )}
							activeOpacity={0.7}
							className={`bg-pill/80 backdrop-blur px-4 py-1 w-44 justify-center rounded-full items-center`}
						>
							<View className='flex flex-row mx-4 items-center justify-center'>
								<Image
									source={Images.UserPill}
									className='w-12 h-12'
								/>
								<View className='pl-2'>
									<Text className='font-GilroyMedium text-[#C9C9C9]'>
										Welcome back!
									</Text>
									<Text className='font-GilroyBold text-white text-lg'>
										John Doe
									</Text>
								</View>
							</View>
						</TouchableOpacity>
						<View className='bg-[#3C3F46] w-10 h-10 rounded-lg flex items-center justify-center'>
							<Image
								source={Icons.GrayBell}
								className='w-6 h-6'
							/>
							<View className='absolute w-2 h-2 bg-red-600 rounded-full top-2.5 right-2.5' />
						</View>
					</View>
					<View className='px-4'>
						<Text className='font-GilroyBold text-4xl text-white'>
							Let’s find the best Parking space
						</Text>
						<View className='w-full mt-4 px-4 bg-black border-2 border-secondary py-6 rounded-lg'>
							<Image
								source={Icons.Search}
								className='w-6 h-6 absolute top-3 right-3'
							/>
							<Text className='font-GilroyRegular text-secondary text-base absolute top-3 left-3'>Find parking area...</Text>
						</View>
					</View>
				</View>

				<View className='px-4 mt-4'>
					<Text className='text-2xl font-GilroySemibold'>Category</Text>
					<View>
						<View className='flex flex-row gap-x-4 mt-4'>
							<TouchableOpacity
								onPress={() => router.push( 'category' )}
								activeOpacity={0.7}
								className='bg-[#EFEFEF] w-[74px] h-24 shadow-sm rounded-lg flex items-center justify-center'
							>
								<Image
									source={Icons.Car}
									className='w-10 h-10'
								/>
								<Text className='font-GilroySemibold text-black text-lg mt-2'>Car</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => router.push( 'category' )}
								activeOpacity={0.7}
								className='bg-[#EFEFEF] w-[74px] h-24 shadow-sm rounded-lg flex items-center justify-center'
							>
								<Image
									source={Icons.Motorcycle}
									className='w-10 h-10'
								/>
								<Text className='font-GilroySemibold text-black text-lg mt-2'>Bike</Text>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => router.push( 'category' )}
								activeOpacity={0.7}
								className='bg-[#EFEFEF] w-[74px] h-24 shadow-sm rounded-lg flex items-center justify-center'
							>
								<Image
									source={Icons.Bicycle}
									className='w-10 h-10'
								/>
								<Text className='font-GilroySemibold text-black text-lg mt-2'>Bicycle</Text>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={() => router.push( 'category' )}
								activeOpacity={0.7}
								className='bg-[#EFEFEF] w-[74px] h-24 shadow-sm rounded-lg flex items-center justify-center'
							>
								<Image
									source={Icons.Truck}
									className='w-10 h-10'
								/>
								<Text className='font-GilroySemibold text-black text-lg mt-2'>Truck</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
