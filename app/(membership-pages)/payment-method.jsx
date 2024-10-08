import DefaultButton from '@/components/DefaultButton'
import Pill from '@/components/Pill'
import { Payments } from '@/constants'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Link, router } from 'expo-router'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const PaymentMethod = () => {
	return (
		<SafeAreaView className='bg-white h-full'>
			<LinearGradient
				colors={['#000', '#0F4F75']}
				start={[0, 0]}
				end={[1, 0]}
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
					<View className='py-4'>
						<Text className='text-white font-GilroyBold text-4xl'>
							Choose Payment Method
						</Text>
						<Text className='text-neutral-400 font-GilroyRegular pt-2 text-base'>
							To complete your SmartPark + membership, please select your
							preferred payment method.
						</Text>
					</View>
					<View>
						<View className='py-4'>
							<View className='flex flex-row items-center justify-between'>
								<View className='flex flex-row items-center'>
									<View className='w-20 h-14 bg-[#1434CB] rounded-xl flex items-center justify-center'>
										<Image
											source={Payments.Visa}
											className='w-12 h-10'
											contentFit='contain'
											tintColor='#FFF'
										/>
									</View>
									<View>
										<Text className='text-white font-GilroyBold text-xl pl-4'>
											Visa
										</Text>
										<Text className='text-neutral-400 font-GilroyRegular text-base pl-4'>
											**** **** **** 1234
										</Text>
									</View>
								</View>
								<View className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
									<Image source={undefined} className='w-4 h-4' />
								</View>
							</View>
						</View>
						<View className='py-4'>
							<View className='flex flex-row items-center justify-between'>
								<View className='flex flex-row items-center'>
									<View className='w-20 h-14 bg-neutral-800 rounded-xl flex items-center justify-center'>
										<Image
											source={Payments.MasterCard}
											className='w-12 h-10'
											contentFit='contain'
										/>
									</View>
									<View>
										<Text className='text-white font-GilroyBold text-xl pl-4'>
											MasterCard
										</Text>
										<Text className='text-neutral-400 font-GilroyRegular text-base pl-4'>
											**** **** **** 1234
										</Text>
									</View>
								</View>
								<View className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
									<Image source={undefined} className='w-4 h-4' />
								</View>
							</View>
						</View>
						<View className='py-4'>
							<View className='flex flex-row items-center justify-between'>
								<View className='flex flex-row items-center'>
									<View className='w-20 h-14 bg-[#6772E5] rounded-xl flex items-center justify-center'>
										<Image
											source={Payments.Stripe}
											className='w-12 h-8'
											contentFit='contain'
											tintColor='#FFF'
										/>
									</View>
									<Text className='text-white font-GilroyBold text-xl pl-4'>
										Stripe
									</Text>
								</View>
								<View className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
									<Image source={undefined} className='w-4 h-4' />
								</View>
							</View>
						</View>
						<View className='py-4'>
							<View className='flex flex-row items-center justify-between'>
								<View className='flex flex-row items-center'>
									<View className='w-20 h-14 bg-neutral-100 rounded-xl flex items-center justify-center'>
										<Image
											source={Payments.PayPal}
											className='w-12 h-8'
											contentFit='contain'
										/>
									</View>
									<View>
										<Text className='text-white font-GilroyBold text-xl pl-4'>
											PayPal
										</Text>
										<Text className='text-neutral-400 font-GilroyRegular text-xs pl-4'>
											Vinculed to johndoe@example.com
										</Text>
									</View>
								</View>
								<View className='w-6 h-6 bg-white rounded-full flex items-center justify-center'>
									<Image source={undefined} className='w-4 h-4' />
								</View>
							</View>
						</View>
					</View>
					<DefaultButton
						title='Continue'
						handlePress={() => router.push('membership-active')}
						containerStyles='mt-7'
						isLoading={undefined}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default PaymentMethod
