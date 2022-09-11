import React, { useCallback, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'

import theme from './src/global/styles/theme';
import { Home } from './src/screens/Home';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { Routes } from './src/routes';



export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View onLayout={onLayoutRootView} style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    </View>
  );
}
