import { View, StyleSheet,TouchableOpacity,Text } from "react-native";
import React from "react";
import {MaterialIcons} from '@expo/vector-icons';

const Header = ({navigation}) => {

    const openMenu = () =>{
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            <MaterialIcons name='menu' size={30} onPress={openMenu} style={styles.icon} />
            <View>
                <Text style={styles.title}>Review-Hub</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: "100%",
        flexDirection: 'row',
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
          fontSize: 25,
          fontFamily: 'tektur-medium',
          fontWeight: '200',
          color:"#051923",
          padding: 0,
          margin:0
    },
    icon:{
        position:"absolute",
        left: 10,
        padding:0,
        margin: 0
    }
})
export default Header;