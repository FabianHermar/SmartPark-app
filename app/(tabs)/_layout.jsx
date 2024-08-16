import React, { useEffect } from 'react';
import { Icons } from '@/constants';
import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

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

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className='flex items-center justify-center flex-col gap-0.5'>
      <Image
        source={icon}
        contentFit='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text style={{ color: color }} className={`${focused ? 'font-GilroySemibold' : 'font-GilroyRegular'} text-xs`}>
        {name}
      </Text>
    </View>
  );
}

const TabsLayout = () => {
  useEffect(() => {
    sendLogToServer('info', 'TabsLayout renderizado');
  }, []);

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#367BFF',
          tabBarInactiveTintColor: '#999999',
          tabBarStyle: {
            backgroundColor: '#232323',
          }
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({ color, focused }) => {
              sendLogToServer('info', `Tab "Home" ${focused ? 'enfocado' : 'no enfocado'}`);
              return (
                <TabIcon
                  icon={Icons.Home}
                  color={color}
                  name='Home'
                  focused={focused}
                />
              );
            }
          }}
        />

        <Tabs.Screen
          name='maps'
          options={{
            headerShown: false,
            title: 'Maps',
            tabBarIcon: ({ color, focused }) => {
              sendLogToServer('info', `Tab "Maps" ${focused ? 'enfocado' : 'no enfocado'}`);
              return (
                <TabIcon
                  icon={Icons.Map}
                  color={color}
                  name='Maps'
                  focused={focused}
                />
              );
            }
          }}
        />

        <Tabs.Screen
          name='membership'
          options={{
            headerShown: false,
            title: 'Membership',
            tabBarIcon: ({ color, focused }) => {
              sendLogToServer('info', `Tab "Membership" ${focused ? 'enfocado' : 'no enfocado'}`);
              return (
                <TabIcon
                  icon={Icons.Diamond}
                  color={color}
                  name='Membership'
                  focused={focused}
                />
              );
            }
          }}
        />

        <Tabs.Screen
          name='profile'
          options={{
            headerShown: false,
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => {
              sendLogToServer('info', `Tab "Profile" ${focused ? 'enfocado' : 'no enfocado'}`);
              return (
                <TabIcon
                  icon={Icons.Profile}
                  color={color}
                  name='Profile'
                  focused={focused}
                />
              );
            }
          }}
        />

        <Tabs.Screen
          name='settings'
          options={{
            headerShown: false,
            title: 'Settings',
            tabBarIcon: ({ color, focused }) => {
              sendLogToServer('info', `Tab "Settings" ${focused ? 'enfocado' : 'no enfocado'}`);
              return (
                <TabIcon
                  icon={Icons.Settings}
                  color={color}
                  name='Settings'
                  focused={focused}
                />
              );
            }
          }}
        />
      </Tabs>
    </>
  );
}

export default TabsLayout;