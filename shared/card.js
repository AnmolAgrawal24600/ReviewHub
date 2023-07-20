import { View, StyleSheet,TouchableOpacity,Text } from "react-native";
import React from "react";

const Card = (props) =>{

    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius: 8,
        elevation: 2,
        backgroundColor: '#c2b4bc',
        shadowOffset:{width:2,height:2},
        shadowColor:"#b0a9ad",
        shadowOpacity: 0.3,
        marginVertical: 7,
        marginHorizontal:4,
        shadowRadius:2,
    },
    cardContent:{
        margin: 10,

    }
})

export default Card;