import { StyleSheet, Text, View } from "react-native"

export default function Explore () {
  return (
    <View style={styles.container}>
      <Text className='font-GilroyBold text-2xl'>Index page</Text>
    </View>
  )
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
} )