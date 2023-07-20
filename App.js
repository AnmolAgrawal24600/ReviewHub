import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
import {View,StyleSheet} from 'react-native';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  'tektur-regular': require('./assets/fonts/Tektur-Regular.ttf'),
  'tektur-medium': require('./assets/fonts/Tektur-Medium.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        
      <Navigator />
      </View>
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)} 
      />
    )
  }

}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#735d78",
    flex:1
  }
})