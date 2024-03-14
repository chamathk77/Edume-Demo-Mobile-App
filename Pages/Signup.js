import React, { Component, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View,Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLOURS from '../Constant/Color'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Checkbox from 'expo-checkbox'
import Button from '../components/Button'


const   Signup = ({navigation}) => {
    const [isPasswordShown,SetisPasswordShown]=useState(false)
    const [isChecked,setisChecked]=useState(false)
    const [isCheckedMale,setisCheckedMale]=useState(false)
    const [isCheckedFemale,setisCheckedFemale]=useState(false)

    function putischecked(){
        setisChecked(!isChecked)
    }

 
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLOURS.white}}>
            <View style={{flex:1,marginHorizontal:22}}>
                <View style={{marginVertical:12}}>
                    <Text style={{
                        fontSize:22,
                        fontWeight:'bold',
                        marginVertical:3,
                        color:COLOURS.black
                    }}>
                        Create Account 

                    </Text>
                    <Text style={{
                        fontSize:16,
                        color:COLOURS.black
                    }}>
                        Join with us today !
                    </Text>


                    <Image
                        source={require("../assets/photos/logo3.jpg")}
                        style={{
                            height:100,
                            width:100,
                            borderRadius:20,
                            position:"absolute",
                            top:0,
                            left:260,
                    
                        }}
                        >
                    
                    </Image>

                    

                </View>

                <View style={{marginBottom:3}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:4,
                    }}>
                        Email Address

                    </Text>

                    <View style={{
                        width:"100%",
                        height:48,
                        borderColor:COLOURS.black,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:22
                        
                    }}>
                        <TextInput
                        placeholder='Enter your email Address'
                        placeholderTextColor={COLOURS.black}
                        keyboardType='email-address'
                        style={{
                            width:"100%"
                        }}
                        />

                    </View>
                </View>


                <View style={{marginBottom:3}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8,
                    }}>
                        Mobile Number

                    </Text>

                    <View style={{
                        width:"100%",
                        height:48,
                        borderColor:COLOURS.black,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:"center",
                        flexDirection:"row",
                        justifyContent:"space-between",
                        paddingLeft:22
                        
                    }}>
                        <TextInput
                        placeholder='+94'
                        placeholderTextColor={COLOURS.black}
                        keyboardType='numeric'
                        style={{
                            width:"12%",
                            borderRightWidth:1,
                            borderLeftColor:COLOURS.grey,
                            height:"100%"
                        }}
                        />

                        <TextInput
                            placeholder="Enter your phone Number"
                            placeholderTextColor={COLOURS.black}
                            keyboardType='numeric'
                            style={{
                                width:'80%'
                            }}
                        />

                    </View>
                </View>


                
                <View style={{marginBottom:6}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8,
                    }}>
                        Password
                    </Text>

                    <View style={{
                        width:"100%",
                        height:48,
                        borderColor:COLOURS.black,
                        borderWidth:1,
                        borderRadius:8,
                        alignItems:"center",
                        justifyContent:"center",
                        paddingLeft:22
                        
                    }}>
                        <TextInput
                        placeholder='Enter your Password'
                        placeholderTextColor={COLOURS.black}
                        secureTextEntry={isPasswordShown}
                        style={{
                            width:"100%"
                        }}
                        />

                        <TouchableOpacity
                            onPress={()=>SetisPasswordShown(!isPasswordShown)}
                            style={{
                                position:'absolute',
                                right:12
                            }}
                        >
                            {isPasswordShown == true ?<Ionicons name='eye-off' size={24} color={COLOURS.black} /> 
                            :
                            <Ionicons name='eye' size={24} color={COLOURS.black} />}
                            

                        </TouchableOpacity>

                    </View>
                </View>

                



                <View style={{
                    flexDirection:'row',
                    marginVertical:3
                    
                }}>

                    <Text style={{marginVertical:5}}>Gender</Text>


                    <Text style={{marginVertical:5,marginHorizontal:10,marginLeft:30}}>Male</Text>

                    <Checkbox
                        style={{
                            marginRight:8,
                            marginVertical:5
                        }}
                        value={isCheckedMale}
                        onValueChange={setisCheckedMale}
                        color={isChecked?COLOURS.primary:undefined}
                    />

                    <Text style={{marginVertical:5,marginHorizontal:10,marginLeft:30}}>Female</Text>

                    <Checkbox
                        style={{
                            marginRight:8,
                            marginVertical:5
                        }}
                        value={isCheckedFemale}
                        onValueChange={setisCheckedFemale}
                        color={isChecked?COLOURS.primary:undefined}
                    />

                  
                    

                   


                     
                </View>

                <View style={{
                    flexDirection:'row',
                    marginVertical:3
                    
                }}>
                    <Checkbox
                        style={{
                            marginRight:8,
                            marginVertical:5
                        }}
                        value={isChecked}
                        onValueChange={putischecked}
                        color={isChecked?COLOURS.primary:undefined}
                    />

                    <Text style={{marginVertical:5}}>I agree to the terms and conditions</Text>


                     
                </View>

                <Button
                    title="Sign Up"
                    filled
                    style={{
                        marginTop:18,
                        marginBottom:4
                    } }
                />

                <View style={{flexDirection:'row',alignItems:'center',marginVertical:10}}>

                    <View
                        style={{
                            flex:1,
                            height:1,
                            backgroundColor:COLOURS.grey,
                            marginHorizontal:10
                        }}
                    />
                    <Text style={{fontSize:14}}>Or Sign Up with</Text>

                    <View
                        style={{
                            flex:1,
                            height:1,
                            backgroundColor:COLOURS.grey,
                            marginHorizontal:10
                        }}
                    />

                </View>

                <View style={{
                    flexDirection:'row',
                    justifyContent:'center'
                }}>

                    <TouchableOpacity
                        onPress={()=>console.log("pressed")}
                        style={{
                            flex:1,
                            alignItems:'center',
                            justifyContent:'center',
                            flexDirection:'row',
                            height:52,
                            borderWidth:1,
                            borderColor:COLOURS.grey,
                            borderRadius:10
                            
                        }}
                    
                    >

                        <Image 
                            source={require("../assets/photos/facebook.png")}
                            style={{
                                height:36,
                                width:36,
                                marginRight:8,
                               
                            }}
                            resizeMode='contain'
                            

                        
                        />

                        <Text>facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>console.log("pressed")}
                        style={{
                            flex:1,
                            alignItems:'center',
                            justifyContent:'center',
                            flexDirection:'row',
                            height:52,
                            borderWidth:1,
                            borderColor:COLOURS.grey,
                            borderRadius:10
                            
                        }}
                    
                    >

                        <Image 
                            source={require("../assets/photos/google.png")}
                            style={{
                                height:36,
                                width:36,
                                marginRight:8,
                               
                            }}
                            resizeMode='contain'
                            

                        
                        />

                        <Text>Google</Text>
                    </TouchableOpacity>


                </View>

                <View style={{
                    flexDirection:'row',
                    justifyContent:'center',
                    marginVertical:10,
                }}>
                    <Text style={{fontSize:16,color:COLOURS.black}}>Already have an Account</Text>
                    <Pressable
                        onPress={()=>navigation.navigate("Login")}
                    >
                        <Text style={{
                            fontSize:16,
                            color:COLOURS.primary,
                            fontWeight:'bold',
                            marginLeft:6
                        }}>
                            Login
                        </Text>
                    </Pressable>

                    

                </View>
                <Button
                    title="Back"
                    onPress={()=>navigation.navigate("Welcome")}
                    
                    style={{
                        marginTop:1,
                        marginBottom:10
                    } }
                
                />
               
            </View>
        </SafeAreaView>
    )
  }


export default Signup
