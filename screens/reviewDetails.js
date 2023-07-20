import React from 'react';
import { StyleSheet, View, Text,Image, DrawerLayoutAndroidComponent } from 'react-native';
import { globalStyles,image} from '../styles/global';
import Card from '../shared/card';
export default function ReviewDetails({ navigation }) {
  
  const rating = navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Card>
      <Text style={globalStyles.titleText}>{ navigation.getParam('title') }</Text>
      <Text style={styles.bodyText}>{ navigation.getParam('body') }</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Review-Hub Rating  </Text>
          <Image source={image.ratings[rating]}/>
        </View>
      </Card>
      
    </View>
  );
}

const styles = StyleSheet.create({
  ratingContainer:{
    flexDirection:'row',
    justifyContent:"center",
    marginTop:20,
    borderWidth:1,
    borderColor:"#6e6469",
    alignItems:"center",
    backgroundColor: '#d9d2d6',
    paddingVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 5
  },
  ratingText:{
    fontFamily:'tektur-medium',
    fontSize: 15,
    fontWeight: '300',
  },
  bodyText:{
    fontFamily:'tektur-medium',
    fontSize: 17,
    fontWeight: '300',
    marginTop: 10,
    textAlign:'justify'
  }
})