import DefaultButton from "@/components/DefaultButton";
import { Images } from "@/constants";
import { Image } from "expo-image";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

export default function Index() {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-start items-start h-full relative'>
          <Image
            source={Images.IndexImage}
            className='w-full h-96 relative'
            contentFit='contain'
            onLoad={() => sendLogToServer('info', 'Imagen principal de la página de inicio cargada correctamente')}
            onError={() => sendLogToServer('error', 'Error al cargar la imagen principal de la página de inicio')}
          />
          <View className='px-4'>
            <Image
              source={Images.Logo}
              className='w-28 h-28'
              contentFit='contain'
              onLoad={() => sendLogToServer('info', 'Logo cargado correctamente')}
              onError={() => sendLogToServer('error', 'Error al cargar el logo')}
            />
            <Text className='text-5xl font-GilroyBold pb-2'>SmartPark</Text>
            <Text className='text-base font-GilroyRegular'>Find and reserve parking in the nearest garages and parking lots.</Text>
          </View>
          <View className='w-full px-4 pt-10'>
            <DefaultButton
              title='Get Started'
              handlePress={() => {
                sendLogToServer('info', 'Usuario haciendo clic en el botón de Empezar');
                router.push('/sign-in');
              }}
              containerStyles='w-full mt-7'
            />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="white" style='dark' />
    </SafeAreaView>
  );
}