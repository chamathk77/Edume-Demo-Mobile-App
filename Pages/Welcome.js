import React, { Component } from 'react'
import { Text, View ,Image, Pressable} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import COLOURS from '../Constant/Color'
import Button from '../components/Button'

const Welcome=({navigation})=> {
  
    return (
      <LinearGradient
        style={{
            flex:1
        }}
        colors={[COLOURS.secondary,COLOURS.primary]}
      >
        <View style={{flex:1}}>
            <Image
                    source={require("../assets/photos/face1.jpg")}
                    style={{
                        height:150,
                        width:150,
                        borderRadius:20,
                        position:"absolute",
                        top:40,
                        transform:[
                            { translateX:20},
                            {translateY:50},
                            {rotate:"-15deg"}
                        ]

                    }}
            >

            </Image>

            <Image
                source={require("../assets/photos/face3.jpg")}
                style={{
                    height:100,
                    width:100,
                    borderRadius:20,
                    position:"absolute",
                    top:-5,
                    left:100,
                    transform:[
                        {translateX:50},
                        {translateY:50},
                        {rotate:"-5deg"}
                    ]
                }}
            >

            </Image>
            <Image
                source={require("../assets/photos/face2.jpg")}
                style={{
                    width:100,
                    height:100,
                    borderRadius:20,
                    position:"absolute",
                    top:170,
                    left:-40,
                    transform:[
                        {translateX:50},
                        {translateY:50},
                        {rotate:"15deg"}
                    ]
                }}
            >

            </Image>

            <Image
                source={require("../assets/photos/logo2.jpg")}
                style={{
                    height:300,
                    width:300,
                    borderRadius:20,
                    position:"absolute",
                    top:130,
                    left:120,
                    transform:[
                        {translateX:50},
                        {translateY:50},
                        {rotate:"-15deg"}
                    ]
                }}
                >
                    

            </Image>
        </View>

        {/* content */}

        <View style={{
            paddingHorizontal:22,
            position:"absolute",
            top:430,
            width:"100%"
        }}>
            <Text style={{
                fontSize:40,
                fontWeight:800,
                color:COLOURS.white
            }}>My Demo App</Text>
            
            <Text style={{
                fontSize:25,
                fontWeight:800,
                color:COLOURS.grey,
                marginVertical:10
                
            }}
            >
            Let's get started</Text>

            <View style={{ marginVertical:22}}>
                <Text  style={{
                    fontSize:16,
                    color:COLOURS.white,
                    marginVertical:4,
                    
                   
                }}>Find the right instructor for you with Edume. Choose from many topics, skill levels here.
                 </Text>
                
                 
                <Text style={{
                    fontSize:16,
                    color:COLOURS.white
                }}

                >Start learning today</Text>

            </View>
            <Button
                title="Join Now"
                onPress={()=>navigation.navigate("Signup")}
                style={{
                    marginTop:15,
                    width:"100%"
                }}
            />
            <View style={{
                flexDirection:"row",
                marginTop:12,
                justifyContent:"center"
            }}>
                    <Text style={{
                        fontSize:16,
                        color:COLOURS.white
                        
                    }}>
                        Already have a account ? 
                    </Text>

                    <Pressable 
                    onPress={()=>navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize:16,
                            color:COLOURS.white,
                            fontWeight:600,
                            marginLeft:4,
                            
                        }}>Login</Text>
                    </Pressable>
            </View>


        </View>

        
        
      </LinearGradient>
    )
  
}

export default Welcome
