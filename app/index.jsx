import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Roboto_400Regular } from 'expo-font';
import DrawerNavigation from '../src/navigation/DrawerNavigation';
import 'react-native-gesture-handler';
import styled from 'styled-components/native';

SplashScreen.preventAutoHideAsync();

const AppContainer = styled.View`
  flex: 1;
  background-color: #F9F7F3;
`;

export default function App() {
  const [fontsLoaded] = useFonts({
    YesevaOne: require('../assets/fonts/YesevaOne-Regular.ttf'),
    Raleway_400: require('../assets/fonts/Raleway-Regular.ttf'),
    Raleway_500: require('../assets/fonts/Raleway-Medium.ttf'),
    Raleway_600: require('../assets/fonts/Raleway-SemiBold.ttf'),
    Raleway_700: require('../assets/fonts/Raleway-Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <AppContainer>
      <DrawerNavigation />
    </AppContainer>
  )
}
