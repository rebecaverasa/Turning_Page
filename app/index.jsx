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
    Raleway: require('../assets/fonts/Raleway-VariableFont_wght.ttf'),
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
