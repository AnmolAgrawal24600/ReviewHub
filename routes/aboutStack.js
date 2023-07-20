import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import { View } from 'react-native';
import React from 'react';
import Header from '../shared/header';
const screens = {
  About: {
      screen: About,
      navigationOptions: ({navigation}) =>{
        return({headerTitle: () => <Header navigation={navigation}/>})
      }
  },
    
}

const AboutStack = createStackNavigator(screens
  ,{
  defaultNavigationOptions: {
      headerStyle:{
          backgroundColor: "#735d78",
          borderBottomWidth: 3,
          borderBottomColor:"#D1B000",
          height: 60,
      },
      headerTintColor: "#051923",
      headerTitleStyle: {
          fontSize: 25,
          fontFamily: 'tektur-medium',
          fontWeight: '200',
          flex:1,
          textAlign:"center", 
        },
  }}
  );
export default AboutStack;  