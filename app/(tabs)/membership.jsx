import GradientButton from '@/components/GradientButton';
import { Images } from '@/constants';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Membership = () => {
	return (
		<SafeAreaView className='bg-black h-full relative' style={styles.safeArea} edges={{ top: 'maximum', left: 'maximum', right: 'maximum' }}>
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<Image
					source={Images.Glass1}
					className='absolute top-56 left-72 w-64 h-64 z-20'
					contentFit='cover'
				/>
				<Image
					source={Images.Glass2}
					className='absolute top-56 -left-16 w-32 h-32 z-20'
					contentFit='cover'
				/>
				<Image
					source={Images.Glass3}
					className='absolute -top-16 left-64 w-32 h-32 z-20'
					contentFit='cover'
				/>
				<ImageBackground source={Images.Membership} style={styles.image}>
					<View className='w-full justify-start pt-10'>
						<View className='items-center justify-center pt-10'>
							<BlurView style={{ borderRadius: 20, overflow: 'hidden' }} className='bg-[#111111]/60 w-56 items-center justify-center' intensity={20}>
								<Image
									source={Images.SmartParkLogo}
									contentFit='contain'
									className='w-52 h-20'
									tintColor='#FFF'
								/>
							</BlurView>
						</View>
					</View>
				<LinearGradient
					colors={[ '#0F1B27', '#0B1521', '#050713' ]}
					start={[ 0, 0 ]}
					end={[ 1, 1 ]}
						className='w-full h-72 items-start justify-start rounded-tl-[65px] mt-4 bottom-0'
				>
						<Text className='text-white font-GilroyBold text-4xl pt-10 pl-6'>Become a member +</Text>
						<Text className='px-6 text-secondary font-GilroyRegular text-base'>Access secure and convenient parking with our monthly membership. Enjoy guaranteed parking in premium locations, with 24/7 surveillance.</Text>
				</LinearGradient>
					<View className='px-4'>
						<GradientButton
							title='Join now'
							containerStyles='absolute bottom-6 left-5 mt-4'
							handlePress={() => router.push( 'membership-benefits' )}
						/>
					</View>
				</ImageBackground>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create( {
	image: {
		flex: 1,
		resizeMode: 'cover',
		justifyContent: 'center',
		height: 700,
		position: 'relative',
	},

	safeArea: {
		flex: 1,
	},
	scrollViewContent: {
		flexGrow: 1,
	},
} );

export default Membership
