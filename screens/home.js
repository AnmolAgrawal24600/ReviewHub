import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList ,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { AntDesign } from '@expo/vector-icons';
import ReviewForm from './reviewForm';



export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
   
    // {title:"Inception",rating:5,body:"Visually stunning masterpiece Developing the language skills to build an argument and to write persuasively is crucial if you’re to write outstanding essays every time. In this article, we’re going to equip you with the words and phrases you need to write a top-notch essay, along with examples of how to utilise them.",key:'1'},
    // {title:"Pulp Fiction",rating:4,body:"Quentin Tarantino classic",key:'2'},
    // {title:"Fight Club",rating:5,body:"Dark and thought-provoking",key:'3'},
    // {title:"The Shawshank Redemption",rating:4,body:"Emotional prison drama",key:'4'}
  ]);

  const addReview = (review) =>{
    review.key = Math.random().toString();
    review.rating = parseInt(review.rating).toString()
    setReviews((oldReviews)=>{return [review,...oldReviews]});
    setModalOpen(false);
  }
  const [modalOpen,setModalOpen] = useState(false);
  
  return (
    <View style={globalStyles.container}>

      <Modal visible={modalOpen} animationType='fade'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
            <AntDesign name="closecircle" size={40} color="#292627" onPress={()=>setModalOpen(false)} style={styles.modalIconCLose}/>
            <ReviewForm addReview={addReview}/>
        </View>
        </TouchableWithoutFeedback>
      </Modal>

      <AntDesign name="pluscircle" size={40} color="#292627" onPress={()=>setModalOpen(true)} style={styles.modalIconAdd} />

      <FlatList data={reviews} renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
          <Card>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
          </Card>
        </TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalIconAdd:{
    alignSelf:'center',
    marginBottom: 10,
  
  },
  modalIconCLose:{
    alignSelf:'center',
    marginTop: 15,
  },
  modalContent:{
    backgroundColor:'#6e6469',
    flex:1,
  }

})