import { StyleSheet, Text, View } from "react-native"

export default function Membership () {
  return (
    <View style={styles.container}>
      <Text>Membership</Text>
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