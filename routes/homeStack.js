import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Home: {
      screen: Home,
      navigationOptions: ({navigation}) =>{
        return({headerTitle: () => <Header navigation={navigation}/>})
      }
          
      
  },
  ReviewDetails:{
      screen: ReviewDetails,
      navigationOptions:{
          title: "Review"
      }
  },
    
}

const HomeStack = createStackNavigator(screens
  ,{
  defaultNavigationOptions: {
      headerStyle:{
          backgroundColor: "#735d78",
          borderBottomWidth: 3,
          borderBottomColor:"#D1B000",
          height: 60,
      },
      headerTitleAlign: 'center',
      headerTintColor: "#051923",
      headerTitleStyle: {
          fontSize: 25,
          fontFamily: 'tektur-medium',
          fontWeight: '200',
          flex:1 
        },
  }}
  );
export default HomeStack;  