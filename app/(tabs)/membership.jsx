import React from 'react';
import DefaultButton from '@/components/DefaultButton';
import { Images } from '@/constants';
import { BlurView } from 'expo-blur';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const sendLogToServer = async (level, message) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YmUwZTYzODY5OWJmNGU3ZGRlZmFhZSIsImVtYWlsIjoiam9yZ2VAdXRuYS5lZHUubXgiLCJuYW1lcyI6IkVtbWEiLCJsYXN0bmFtZXMiOiJMQSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyMzczMTU3NCwiZXhwIjoxNzIzODE3OTc0fQ._8Jfdj_N2QcOAPE9ucPrf1SOQTguernp4_WLSAcKgNU";
  try {
    await fetch('https://parkease-backend.onrender.com/api/v1/user/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        level: level,
        message: message,
      }),
    });
    console.log(`[Log] ${message} enviado al servidor`);
  } catch (error) {
    console.error('Error al enviar el log:', error);
  }
}

const Membership = () => {
  return (
    <SafeAreaView className='bg-black h-full relative' style={styles.safeArea} edges={{ top: 'maximum', left: 'maximum', right: 'maximum' }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          source={Images.Glass1}
          className='absolute top-56 left-72 w-64 h-64 z-20'
          contentFit='cover'
          onLoad={() => sendLogToServer('info', 'Imagen Glass1 cargada')}
          onError={() => sendLogToServer('error', 'Error al cargar Imagen Glass1')}
        />
        <Image
          source={Images.Glass2}
          className='absolute top-56 -left-16 w-32 h-32 z-20'
          contentFit='cover'
          onLoad={() => sendLogToServer('info', 'Imagen Glass2 cargada')}
          onError={() => sendLogToServer('error', 'Error al cargar Imagen Glass2')}
        />
        <Image
          source={Images.Glass3}
          className='absolute -top-16 left-64 w-32 h-32 z-20'
          contentFit='cover'
          onLoad={() => sendLogToServer('info', 'Imagen Glass3 cargada')}
          onError={() => sendLogToServer('error', 'Error al cargar Imagen Glass3')}
        />
        <ImageBackground source={Images.Membership} style={styles.image}>
          <View className='w-full justify-start py-64 pt-10'>
            <View className='items-center justify-center pt-10'>
              <BlurView style={{ borderRadius: 20, overflow: 'hidden' }} className='bg-[#111111]/60 w-56 items-center justify-center' intensity={20}>
                <Image
                  source={Images.SmartParkLogo}
                  contentFit='contain'
                  className='w-52 h-20'
                  tintColor='#FFF'
                  onLoad={() => sendLogToServer('info', 'Logo SmartPark cargado')}
                  onError={() => sendLogToServer('error', 'Error al cargar Logo SmartPark')}
                />
              </BlurView>
            </View>
          </View>
          <LinearGradient
            colors={['#000', '#0F4F75']}
            start={[0, 0]}
            end={[1, 0]}
            className='w-full h-[270px] items-start justify-start rounded-tl-[65px] mt-4 bottom-0'
          >
            <Text className='text-white font-GilroyBold text-4xl pt-6 pl-6'>
              Become a member +
            </Text>
            <Text className='px-6 text-secondary font-GilroyRegular text-base'>
              Access secure and convenient parking with our monthly membership. Enjoy guaranteed parking in premium locations, with 24/7 surveillance.
            </Text>
          </LinearGradient>
          <View className='px-4'>
            <DefaultButton
              title='More Information'
              containerStyles='absolute bottom-6 left-5 mt-4'
              handlePress={() => {
                sendLogToServer('info', 'Navegando a la página de beneficios de membresía');
                router.push('membership-benefits');
              }}
              textStyles='text-xl'
            />
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default Membership;
