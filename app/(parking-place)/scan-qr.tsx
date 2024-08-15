import React, { useEffect, useState, useRef } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { StyleSheet, Text, View, TouchableOpacity, Animated } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, Image } from 'react-native';
import Pill from '@/components/Pill';
import { Images } from '@/constants';
import { Link, router } from 'expo-router';

const ScanQR = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [hasScanned, setHasScanned] = useState<boolean>(false);
  const [scannedText, setScannedText] = useState<string>("");
  const animation = useRef(new Animated.Value(0)).current;

  const askCameraPermission = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status === "granted");
  };

  const handleAfterScanned = ({ data }: { data: string }) => {
    setHasScanned(true);
    setScannedText(data);
    Animated.timing(animation).stop();
    // Navigate to the /additional-info page after scanning
    router.push('/additional-info');
  };

  useEffect(() => {
    askCameraPermission();
  }, []);

  useEffect(() => {
    if (!hasScanned) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 250,
            duration: 1500,
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 1500,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [animation, hasScanned]);

  if (hasPermission === false) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Permission denied</Text>
        <TouchableOpacity style={styles.button} onPress={askCameraPermission}>
          <Text style={styles.buttonText}>Allow Camera</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  if (hasPermission === null) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.infoText}>Requesting camera Permission</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={Images.BlueGradient6}
        style={styles.backgroundImage}
      />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.header}>
          <Pill
            title='Back'
            handlePress={() => router.back()}
            containerStyles={styles.pillContainer}
            textStyles={styles.pillText}
            isLoading={undefined}
          />
        </View>

        <Text style={styles.title}>Scan QR Code</Text>
        <Text style={styles.description}>
          In order to enter our parking lot, you must scan the QR code provided at the parking lot door.
        </Text>

        <View style={styles.scannerContainer}>
          <BarCodeScanner
            onBarCodeScanned={hasScanned ? undefined : handleAfterScanned}
            style={StyleSheet.absoluteFillObject}
          />
          <View style={styles.overlay}>
            <Text style={styles.scanText}>Scan QR Code</Text>
            <View style={styles.scannerFrame}>
              <View style={styles.cornerTopLeft} />
              <View style={styles.cornerTopRight} />
              <View style={styles.cornerBottomLeft} />
              <View style={styles.cornerBottomRight} />

              {!hasScanned && (
                <Animated.View
                  style={[
                    styles.animatedLine,
                    { transform: [{ translateY: animation }] },
                  ]}
                />
              )}
            </View>
          </View>
        </View>

        <Text style={styles.scannedText}>{scannedText}</Text>

        <Text style={styles.redirectMessage}>
          You will be automatically redirected to the next tab after scanning the QR code.
        </Text>

        <View style={styles.linkContainer}>
          <Text style={styles.linkDescription}>
            This link is only for testing the views of the other pages, remove it when necessary.
          </Text>
          <Link style={styles.linkButton} href='/additional-info'>
            Next page
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScanQR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: -450,
    left: 0,
    opacity: 0.7,
  },
  scrollViewContent: {
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 24,
  },
  pillContainer: {
    width: 64, // equivalente a w-16 en Tailwind CSS
  },
  pillText: {
    // Define estilos para el texto aquí si es necesario
  },
  title: {
    fontSize: 32,
    fontFamily: 'GilroySemibold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    fontFamily: 'GilroyRegular',
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 32,
  },
  scannerContainer: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanText: {
    color: '#FFF',
    fontSize: 20,
    marginBottom: 20,
  },
  scannerFrame: {
    width: 190,
    height: 230,
    position: 'relative',
  },
  cornerTopLeft: {
    width: 60,
    height: 60,
    borderColor: '#FFF',
    borderLeftWidth: 6,
    borderTopWidth: 6,
    borderTopLeftRadius: 15,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  cornerTopRight: {
    width: 60,
    height: 60,
    borderColor: '#FFF',
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderTopRightRadius: 15,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  cornerBottomLeft: {
    width: 60,
    height: 60,
    borderColor: '#FFF',
    borderLeftWidth: 6,
    borderBottomWidth: 6,
    borderBottomLeftRadius: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  cornerBottomRight: {
    width: 60,
    height: 60,
    borderColor: '#FFF',
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderBottomRightRadius: 15,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  animatedLine: {
    position: 'absolute',
    width: '100%',
    height: 3,
    backgroundColor: 'red',
    top: 0,
  },
  scannedText: {
    fontSize: 18,
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 20,
    color: '#F00',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00FF00',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  redirectMessage: {
    fontSize: 14,
    color: '#6c757d',
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 32,
  },
  linkContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkDescription: { 
    fontSize: 14, 
    color: '#6c757d', 
    textAlign: 'center', 
    paddingHorizontal: 10, 
    marginBottom: 8, }, 
    linkButton: { 
      color: '#007bff', 
      fontFamily: 'GilroyBold', 
      backgroundColor: '#e9ecef', 
      paddingVertical: 8, 
      paddingHorizontal: 16, 
      borderRadius: 5, 
    }, 
  });
