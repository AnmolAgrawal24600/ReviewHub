
import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    
    container:{
        paddingTop: 20,
        padding: 20,
        paddingBottom:0,
        flex:1,
       backgroundColor:"#6e6469"
},
    titleText:{

        fontFamily: 'tektur-medium',
        fontSize: 20,
    }
})

export const image = {
    ratings:{
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}