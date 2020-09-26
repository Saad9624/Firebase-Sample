import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native' ;


const Toolbar=(props) =>{
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Toolbar;


const styles= StyleSheet.create({
    header:{
            height:50,
            borderBottomColor:'grey',
            borderBottomWidth:1,
            marginBottom:10,
            alignItems:'center'
    },
    title:{
        alignSelf:'center',
        fontSize:20,
        marginTop:10,
        fontWeight:'800'
    }

});
