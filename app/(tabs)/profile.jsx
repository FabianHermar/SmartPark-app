import React from 'react';
import { Icons, Images } from '@/constants';
import { Image } from 'expo-image';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

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

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <View className="bg-white shadow-lg transform duration-200 ease-in-out">
          <View className="h-32 overflow-hidden relative">
            <Image
              className="w-full h-32"
              source={Images.ProfileHeader}
              onLoad={() => sendLogToServer('info', 'Imagen de encabezado del perfil cargada')}
              onError={() => sendLogToServer('error', 'Error al cargar la imagen de encabezado del perfil')}
            />
          </View>
          <View className="flex justify-center items-center px-5 -mt-12">
            <Image
              className="h-32 w-32 bg-white p-2 rounded-full border-[6px] border-white"
              source={Images.UserPill}
              onLoad={() => sendLogToServer('info', 'Imagen del perfil cargada')}
              onError={() => sendLogToServer('error', 'Error al cargar la imagen del perfil')}
            />
          </View>
          <View className="text-center px-4 justify-center items-center pt-4">
            <Text className="text-4xl font-GilroyBold">John Doe</Text>
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
                  onLoad={() => sendLogToServer('info', 'Ícono de ubicación cargado')}
                  onError={() => sendLogToServer('error', 'Error al cargar el ícono de ubicación')}
                />
                <Text className='font-GilroyRegular text-sm text-secondary'>San Francisco, CA.</Text>
              </View>
              <View className='flex flex-row items-center gap-x-1'>
                <Image
                  source={Icons.GrayCrown}
                  className="w-5 h-5"
                  onLoad={() => sendLogToServer('info', 'Ícono de membresía cargado')}
                  onError={() => sendLogToServer('error', 'Error al cargar el ícono de membresía')}
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
                onPress={() => {
                  sendLogToServer('info', 'Navegando a la pantalla de Tickets');
                  navigation.navigate('QRScanner');
                }}
              >
                <Image
                  source={Icons.Tickets}
                  className="w-7 h-7"
                  onLoad={() => sendLogToServer('info', 'Ícono de Tickets cargado')}
                  onError={() => sendLogToServer('error', 'Error al cargar el ícono de Tickets')}
                />
                <Text className='font-GilroyMedium text-sm'>Tickets</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className='flex flex-col items-center gap-x-1 bg-[#E5E5E5] w-24 h-20 rounded-xl justify-center shadow' 
                activeOpacity={0.6}
                onPress={() => {
                  sendLogToServer('info', 'Navegando a la pantalla de Payment');
                  navigation.navigate('QRScanner');
                }}
              >
                <Image
                  source={Icons.Payment}
                  className="w-7 h-7"
                  onLoad={() => sendLogToServer('info', 'Ícono de Payment cargado')}
                  onError={() => sendLogToServer('error', 'Error al cargar el ícono de Payment')}
                />
                <Text className='font-GilroyMedium text-sm'>
                  Payment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                className='flex flex-col items-center gap-x-1 bg-[#E5E5E5] w-24 h-20 rounded-xl justify-center shadow' 
                activeOpacity={0.6}
                onPress={() => sendLogToServer('info', 'Navegando a la pantalla de Support')}
              >
                <Image
                  source={Icons.LifeBuoy}
                  className="w-7 h-7"
                  onLoad={() => sendLogToServer('info', 'Ícono de Support cargado')}
                  onError={() => sendLogToServer('error', 'Error al cargar el ícono de Support')}
                />
                <Text className='font-GilroyMedium text-sm'>
                  Support
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text className='text-3xl font-GilroySemibold px-4 pt-6'>Last Activity</Text>
              <View className='h-full'>
                {/* Aquí necesitas mostrar la actividad reciente */}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
