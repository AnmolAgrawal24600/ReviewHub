import React from "react";
import {View,Text,Button,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { Formik } from "formik";
import { globalStyles } from "../styles/global";
import * as yup from 'yup';


const reviewSchema = yup.object({
    title: yup.string().required('Field is Required').min(4,'Minimum 4 Characters Required'),
    body : yup.string().required('Field is Required').min(8,'Minimum 8 Characters Required'),
    rating: yup.string().required('Field is Required').test('test','Rating must be between 1-5',(val)=>{
        return parseInt(val)<6 && parseInt(val)>0;
    })
})

export default function ReviewForm({addReview}) {

    return(
        <View style={globalStyles.container}>
            <Formik
                initialValues={{title:"",body:"",rating:""}}
                validationSchema={reviewSchema}
                onSubmit={(values)=>{
                    addReview(values);
                    //actions.resetForm();
                }}>
                {(props)=>{
                    return(
                        <View>
                            <TextInput style={styles.input} placeholder="Title" placeholderTextColor={'#474244'}
                                       onChangeText={props.handleChange('title')} 
                                       value={props.values.title} 
                                       underlineColorAndroid="transparent"
                                       onBlur={props.handleBlur('title')}/>

                            {(props.touched.title && props.errors.title)?(<Text style={styles.errorText}>{props.errors.title}</Text>):null} 

                            <TextInput multiline
                                       style={styles.input} placeholder="Description" placeholderTextColor={'#474244'}
                                       onChangeText={props.handleChange('body')} 
                                       underlineColorAndroid="rgba(0,0,0,0)"
                                       value={props.values.body} 
                                       onBlur={props.handleBlur('body')}/>

                            {(props.touched.body && props.errors.body)?(<Text style={styles.errorText}>{props.errors.body}</Text>):null} 

                            <TextInput style={styles.input} placeholder="Rating(1-5)" placeholderTextColor={'#474244'}
                                       onChangeText={props.handleChange('rating')} 
                                       underlineColorAndroid="transparent"
                                       value={props.values.rating} 
                                       onBlur={props.handleBlur('rating')}
                                       keyboardType="numeric"/>

                            {(props.touched.rating && props.errors.rating)?(<Text style={styles.errorText}>{props.errors.rating}</Text>):null} 

                                       <View style={styles.button}>                            
                                <TouchableOpacity activeOpacity={0.8} onPress={()=>props.handleSubmit()}>
                                    <Text style={styles.buttonText}>Add</Text>
                                </TouchableOpacity>
                                </View>

                            
                        </View>
                       
                    )
                }}
            </Formik>
        </View>
    )
}

const styles= StyleSheet.create({
    input:{
        fontFamily:'tektur-medium',
        //margin: 15,
        borderRadius: 8,
        elevation: 10,
        backgroundColor: '#c2b4bc',
        shadowOffset:{width:2,height:2},
        shadowColor:"#b0a9ad",
        shadowOpacity: 0.3,
        marginVertical: 10,
        marginHorizontal:4,
        shadowRadius:2,
        paddingHorizontal: 15,
        paddingVertical:5,
        color:'#292627',
        fontSize: 15
    },
    button:{
        marginTop:20,
        color:'#292627',
        alignItems:'center',
        //backgroundColor:'pink'
    },
    buttonText:{
            backgroundColor:"#292627",
            color: '#c2b4bc',
            fontFamily:'tektur-medium',
            paddingHorizontal:27,
            paddingVertical:12,
            fontSize: 20,
            elevation:5,
            borderRadius:8,
    },
    errorText:{
       textAlign:'center',
       color:'crimson', 
    }
})

//{/* <Button title="Add" color={'#292627'} onPress={props.handleSubmit}/> */}