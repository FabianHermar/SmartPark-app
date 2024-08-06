import { StyleSheet, Text, View } from "react-native"

export default function Maps () {
  return (
    <View style={styles.container}>
			<Text className='font-GilroyMedium text-xl'>We're working on the maps section</Text>
			<Text className='font-GilroyMedium text-xl'>Stay tuned!</Text>
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
		backgroundColor: '#fff',
  },
} )
