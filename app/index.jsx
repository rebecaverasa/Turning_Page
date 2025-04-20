import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { View } from 'react-native';
import DrawerNavigation from '../src/navigation/DrawerNavigation';
import 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    YesevaOne: require('../assets/fonts/YesevaOne-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1, backgroundColor: '#F9F7F3' }}>
      <DrawerNavigation />
    </View>
  )
}
