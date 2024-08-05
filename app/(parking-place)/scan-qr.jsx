import Pill from '@/components/Pill';
import { Images } from '@/constants';
import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ScanQR = () => {
	return (
		<SafeAreaView className='bg-white h-full'>
			<Image
				source={Images.BlueGradient6}
				className='w-full h-full absolute -top-[450px] opacity-70 left-0' />
			<ScrollView>
				<View className='w-full justify-start h-full px-4 pt-10'>
					<View className='pb-6 flex flex-row justify-between items-center'>
						<Pill
							title='Back'
							handlePress={() => router.back()}
							containerStyles='w-16'
							textStyles={undefined}
							isLoading={undefined}
						/>
					</View>
					<View>
						<Text className='font-GilroySemibold text-4xl'>Scan QR Code</Text>
						<Text className='font-GilroyRegular text-base text-secondary'>In order to enter our parking lot, you must scan the QR code provided at the parking lot door.</Text>
					</View>

					{/* Insert QR code here */}
					<View className='py-48'>

					</View>

					<View>
						<Text className='text-sm text-center font-GilroyRegular px-10 text-secondary'>You will be automatically redirected to the next tab after scanning the QR code.</Text>
					</View>

					<View className='flex justify-center items-center pt-4 gap-y-2'>
						<Text className='text-secondary font-GilroyRegular text-center'>This link is only for testing the views of the other pages, remove it when necessary.</Text>
						<Link className='text-primary font-GilroyBold bg-neutral-300 px-3 py-1' href='/additional-info'>Next page</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default ScanQR;
