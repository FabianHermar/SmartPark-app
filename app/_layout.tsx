import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync()

export default function RootLayout () {
  const [fontsLoaded, error] = useFonts( {
    GilroyRegular: require( "@/assets/fonts/GilroyRegular.ttf" ),
    GilroyMedium: require( "@/assets/fonts/GilroyMedium.ttf" ),
    GilroySemibold: require( "@/assets/fonts/GilroySemibold.ttf" ),
    GilroyBold: require( "@/assets/fonts/GilroyBold.ttf" ),
  });

  useEffect(() => {
    if ( error ) throw error

    if ( fontsLoaded ) SplashScreen.hideAsync()
  }, [fontsLoaded, error] )

  if ( !fontsLoaded && !error ) return null

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(auth)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(forgot-password)"
        options={{ headerShown: false }}
      />
			<Stack.Screen
				name="(tabs)"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="(parking-place)"
				options={{ headerShown: false }}
			/>
    </Stack>
  )
}
