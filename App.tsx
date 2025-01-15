import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {useFonts} from 'expo-font';

function App() {
  const [fontsLoaded] = useFonts({
    'KronaOne-Regular': require('./src/assets/fonts/KronaOne-Regular.ttf'),
    'Montserrat-Italic': require('./src/assets/fonts/Montserrat-Italic.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.fitnessText}>Fitness</Text>
        <Text style={styles.connectionText}>Connection</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Join Now</Text>
          <Text style={styles.arrow}></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  fitnessText: {
    fontFamily: 'KronaOne-Regular',
    color: '#FFD700',
    fontSize: 32,
    marginBottom: 5,
  },
  connectionText: {
    fontFamily: 'Montserrat-Italic',
    color: '#FFFFFF',
    fontSize: 32,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Montserrat-Italic',
    color: '#000000',
    fontSize: 16,
  },
  arrow: {
    color: '#000000',
    fontSize: 20,
    marginLeft: 5,
  },
});

export default App;
