import DefaultButton from '@/components/DefaultButton';
import { Icons, Images } from '@/constants';
import settings from '@/lib/settings';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
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

const Settings = () => {
  return (
    <SafeAreaView className='bg-white h-full' edges={{ top: 'maximum', left: 'maximum', right: 'maximum' }}>
      <ScrollView>
        <Image
          source={Images.BlueGradient8}
          className='w-full h-full absolute -top-56 opacity-80 left-0'
          onLoad={() => sendLogToServer('info', 'Imagen de fondo cargada correctamente')}
          onError={() => sendLogToServer('error', 'Error al cargar la imagen de fondo')}
        />
        <View className='w-full justify-start h-full px-4 pt-10'>
          <View className='pb-16 flex flex-row justify-between items-center'>
            <Text className='text-5xl font-GilroyBold'>
              Settings
            </Text>
          </View>
          <View className='w-full h-max mb-6 justify-start'>
            {settings.map((setting, index) => (
              <View
                key={index}
                className='px-4 flex flex-row items-center gap-x-1.5 pb-10'
                onTouchStart={() => sendLogToServer('info', `Configuración seleccionada: ${setting.title}`)}
              >
                <Image
                  source={setting.icon}
                  className='w-8 h-8'
                  tintColor='#666666'
                  onLoad={() => sendLogToServer('info', `Ícono de configuración cargado: ${setting.title}`)}
                  onError={() => sendLogToServer('error', `Error al cargar ícono de configuración: ${setting.title}`)}
                />
                <Text className='text-lg font-GilroyMedium'>
                  {setting.title}
                </Text>
                <Image
                  source={Icons.Down}
                  tintColor='#666666'
                  className='w-8 h-8'
                  onLoad={() => sendLogToServer('info', 'Ícono de flecha hacia abajo cargado')}
                  onError={() => sendLogToServer('error', 'Error al cargar ícono de flecha hacia abajo')}
                />
              </View>
            ))}
            <DefaultButton
              title='Log Out'
              handlePress={() => {
                sendLogToServer('info', 'Usuario haciendo clic en el botón de Cerrar sesión');
                router.replace('sign-in');
              }}
              containerStyles={undefined}
              textStyles='text-lg'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;