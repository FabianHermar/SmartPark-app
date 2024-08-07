import DefaultButton from '@/components/DefaultButton'
import Pill from '@/components/Pill'
import { Images } from '@/constants'
import { BlurView } from 'expo-blur'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const MembershipBenefits = () => {
	return (
		<SafeAreaView className='bg-white h-full'>
			<LinearGradient
				colors={[ '#000', '#0F4F75' ]}
				start={[ 0, 0 ]}
				end={[ 1, 0 ]}
				className='absolute top-0 left-0 w-full h-[850px] right-0'
			/>
			<ScrollView>
				<View className='w-full justify-start h-full px-4 pt-10'>
					<View className='pb-6 flex flex-row justify-between items-center'>
						<Pill
							title='Back'
							handlePress={() => router.back()}
							containerStyles='w-16 bg-white/20'
							textStyles='text-white'
							iconColor='#FFF'
						/>
					</View>
					<View className='flex flex-row justify-between items-center'>
						<Image
							source={Images.SmartParkLogo}
							contentFit='contain'
							className='w-48 h-20'
							tintColor='#FFF'
						/>
						<BlurView className='bg-[#C96000]/40 px-4 py-2 w-[110px] items-center' intensity={15} style={{ borderRadius: 20, overflow: 'hidden' }}>
							<Text className='text-white font-GilroyMedium'>🔥 Hot Plan</Text>
						</BlurView>
					</View>
					<View className='py-4'>
						<Text className='text-5xl pb-3 font-GilroyBold text-white'>SmartPark +</Text>
						<Text className='text-neutral-400 font-GilroyRegular text-sm'>Priority access, reserved spaces, premium security and special discounts! Park fast and worry-free. Join today and enjoy a superior parking experience!</Text>
					</View>
					<View className='pt-10 flex flex-row items-center'>
						<Text className='font-GilroyBold text-6xl text-white'>$499</Text>
						<Text className='font-GilroySemibold text-lg text-neutral-400'>/month</Text>
					</View>
					<DefaultButton
						title='Join Now'
						containerStyles='mt-6 border-2 border-white/10'
						textStyles='text-xl'
					/>
					<View className='flex flex-row items-center justify-between pt-6'>
						<View className='border-2 border-neutral-400 w-24 rounded-lg h-0.5' />
						<Text className='text-neutral-400 font-GilroySemibold text-lg'>Benefits</Text>
						<View className='border-2 border-neutral-400 w-24 rounded-lg h-0.5' />
					</View>
					<Text className='font-GilroyRegular text-neutral-400 text-xs text-center'>Click on each of the benefits to see more information.</Text>
					<View>

					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default MembershipBenefits
