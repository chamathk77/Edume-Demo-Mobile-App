import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'
import COLOURS from '../Constant/Color'

const Button=(props)=> {

    const filledBgColor=props.color || COLOURS.primary
    const outlinedColor=COLOURS.white
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLOURS.white : COLOURS.primary

    return(
       <TouchableOpacity
        style={{
            ...styles.Button,
            ...{backgroundColor:bgColor},
            ...props.style
        }}
        onPress={props.onPress}
       >
            <Text style={{fontSize:18,...{color:textColor}}}>{props.title}</Text>
       </TouchableOpacity>

    )

}
 
 


const styles=StyleSheet.create({
    Button:{
        paddingBottom:16,
        paddingVertical:10,
        borderColor:COLOURS.primary,
        borderWidth:2,
        borderRadius:12,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Button
