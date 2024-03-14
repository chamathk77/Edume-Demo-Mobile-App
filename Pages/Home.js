import React from 'react'
import { useState } from 'react';
import { Button, StyleSheet, View,FlatList,Image ,Text } from 'react-native';
import GoalInput from './home/GoalInput'
import GoalItem from './home/GoalItem';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient'
import COLOURS from '../Constant/Color'
import ButtonS from '../components/Button';

const   Home=({navigation})=> {  
  const [courseGoals,setCourseGoals]=useState([])
  const [modalIsVisibile,setModalIsVisibile]=useState(false)

  function startAddGoalHandler(){
    setModalIsVisibile(true)

  }

  function endAddGoalHandler(){
    setModalIsVisibile(false)
  }
  
  

  function addGoalHandler(entertGoalText){
    // setCourseGoals([...courseGoals,enterText])
    setCourseGoals((currentCourseGoals)=>([
      ...currentCourseGoals,
      {text:entertGoalText,id:Math.random().toString()},

    ])); 
    endAddGoalHandler();

  }

  function deleteGoal(id){ 
    setCourseGoals((currentCourseGoals)=>{
      return currentCourseGoals.filter((goals)=>(goals.id !== id ))
    })

    
   } 


  return (

    <LinearGradient
        style={{
            flex:1
        }}
        colors={[COLOURS.secondary,COLOURS.primary]}
      >

    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer} >
      <Button 
      title='Enter your Skills ' 
      color="#a065ec"   
      onPress={startAddGoalHandler}
      />

      <GoalInput 
      visible={modalIsVisibile} 
      onAddGoal={addGoalHandler} 
      onCancel={endAddGoalHandler}
      />

        <Image
                source={require("../../Intern_Project/assets/photos/logo2.jpg")}
                style={{
                    height:300,
                    width:300,
                    borderRadius:20,
                    position:"absolute",
                    top:200,
                    left:60,
                    alignItems:'center',
                    
                    alignContent:'center'
                  
                }}
            >
          </Image>      

          

      
      

      <View style={styles.goalContainer}>
      
        <FlatList data={courseGoals}

        renderItem={(data,)=>{
          return (
          <GoalItem 
           text={data.item.text} 
           id={data.item.id}
           onDeleteItem={deleteGoal}  />);
        }}
        
        keyExtractor={(item,index)=>{
          return item.id
        }}
        alwaysBounceVertical={true}/>

          
            
              
        
      </View>

      <ButtonS
        title="Logout"
        onPress={()=>navigation.navigate("Welcome")}
        
        style={{
            marginTop:1,
            marginBottom:50 }}
      />
     
      
    </View>

    </> 

    </LinearGradient>
  );
}

export default Home

const styles = StyleSheet.create({
  appContainer:{
    flex:1 ,
  
    
    paddingTop:50,
    paddingHorizontal:16,
   
    
    
   
  },
  
  goalContainer:{
    flex:5
    
  },
  
 

  
});
