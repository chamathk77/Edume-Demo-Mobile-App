import { useState } from 'react';
import React from 'react'
import { Button, StyleSheet, Text, TextInput, View,ScrollView,FlatList,Modal,Image  } from 'react-native';



function GoalInput(props) {
    const [entertGoalText,setentertGoalText]=useState('')
   
    function goalInputHandler(text){
       setentertGoalText(text)

    }

    function addGoalHandler(){
        props.onAddGoal(entertGoalText)
        setentertGoalText('')

    }
  return (
    <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            
            <TextInput 
            style={styles.TextInput} 
            placeholder='  Your Course Goal' 
            onChangeText={goalInputHandler} 
            value={entertGoalText}/>
            

            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button  title='Submit' onPress={addGoalHandler} color="#b180f0"/>

                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>

                </View>
              
                

            </View>
            
        </View>
    </Modal>
    
  )
}

export default GoalInput

const styles=StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'colunm',
        justifyContent:'center',  
        alignItems:'center',
        padding:16,
        backgroundColor:'#007F73'
        
        
      },
      TextInput:{
        borderWidth:1,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        color:'#120438',
        borderRadius:6,
        width:'100%',
        marginRight:8,
        padding:8,
    
      },
      buttonContainer:{
        flexDirection:'row',
        marginTop:16
      },
      button:{
        width:'30%',
        marginHorizontal:8

      },
      image:{
        width:100,
        height:100,
        margin:20,

      },

})
