import CategoryCard from "@/components/CategoryCard";
import { Icons, Images } from "@/constants";
import { Image } from 'expo-image';
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserIndex () {
	const [ selectedCheckbox, setSelectedCheckbox ] = useState( null )

	const checkboxes = [
		{ id: 1, text: 'Car', image: Icons.Car },
		{ id: 2, text: 'Bike', image: Icons.Motorcycle },
		{ id: 3, text: 'Bicycle', image: Icons.Bicycle },
		{ id: 4, text: 'Truck', image: Icons.Truck },
	];

	const handlePress = ( id ) => {
		if ( selectedCheckbox === id ) {
			setSelectedCheckbox( null )
		} else {
			setSelectedCheckbox( id )
		}
	};

	return (
		<SafeAreaView className='bg-white h-full' edges={{ top: 'maximum', left: 'maximum', right: 'maximum' }}>
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
						<View className='flex flex-row justify-center items-center'>
							{checkboxes.map( ( checkbox ) => (
								<CategoryCard
									key={checkbox.id}
									text={checkbox.text}
									imageSource={checkbox.image}
									additionalContent={null}
									checked={selectedCheckbox === checkbox.id}
									onPress={() => handlePress( checkbox.id )}
								/>
							) )}
						</View>
					</View>
				</View>
				<View className='px-4 mt-10'>
					<Text className='text-2xl font-GilroySemibold'>Most popular car parks</Text>
					<View className='flex flex-row gap-x-4 mt-4'>
						<TouchableOpacity
							onPress={() => router.push( 'parking' )}
							activeOpacity={0.7}
							className='w-[150px] h-[150px] bg-[#EFEFEF] rounded-lg shadow-sm'
						>
							<Image
								source={Images.Parking1}
								className='w-full h-3/4 rounded-t-lg'
							/>
							<View className='px-4 pt-4'>
								<Text className='font-GilroySemibold text-black text-lg'>Parking 1</Text>
								<Text className='font-GilroyRegular text-secondary text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => router.push( 'parking' )}
							activeOpacity={0.7}
							className='w-[150px] h-[150px] bg-[#EFEFEF] rounded-lg shadow-sm'
						>
							<Image
								source={Images.Parking2}
								className='w-full h-3/4 rounded-t-lg'
							/>
							<View className='px-4 pt-4'>
								<Text className='font-GilroySemibold text-black text-lg'>Parking 2</Text>
								<Text className='font-GilroyRegular text-secondary text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
