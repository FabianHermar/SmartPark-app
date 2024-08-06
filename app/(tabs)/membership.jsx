import { Images } from '@/constants';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Membership = () => {
	return (
		<SafeAreaView className='bg-black h-full' edges={{ top: 'maximum', left: 'maximum', right: 'maximum' }}>
			<ScrollView>
				<ImageBackground source={Images.Membership} style={styles.image}>
					<View className='w-full justify-start h-full pt-10'>
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
				</ImageBackground>
				<LinearGradient
					colors={[ '#0F1B27', '#0B1521', '#050713' ]}
					start={[ 0, 0 ]}
					end={[ 1, 1 ]}
					className='w-full h-48 items-start justify-center rounded-tl-[65px] mt-4 absolute bottom-0'
				>
					<Text className='text-white'>Hola</Text>
				</LinearGradient>
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
	}
} );

export default Membership
