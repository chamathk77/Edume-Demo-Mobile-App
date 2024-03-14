import React, { Component, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View,Image, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import COLOURS from '../Constant/Color'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Checkbox from 'expo-checkbox'
import Button from '../components/Button'


const   Login = ({navigation}) => {
    const [isPasswordShown,SetisPasswordShown]=useState(false)
    const [isChecked,setisChecked]=useState(false)
    const [email,setemail]=useState('')
    const [Password,setPassword]=useState('')
    const [err,seterr]=useState('')

    function emailcheck(Text){
        setemail(Text)
    }
    function Passwordcheck(Text){
        setPassword(Text)
    }


    function validcheck(){
      if(email!=='chamath@gmail.com'){
        seterr('invalid Email Address or password')
      }else if(Password !=='1234'){

        seterr('invalid Password')
      }else{
        navigation.navigate('Home')
      }

      

      
      
        

    }

    function putischecked(){
        setisChecked(!isChecked)
    }

 
    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLOURS.white}}>
            <View style={{flex:1,marginHorizontal:22}}>
                <View style={{marginVertical:22}}>
                    <Text style={{
                        fontSize:22,
                        fontWeight:'bold',
                        marginVertical:12,
                        color:COLOURS.black
                    }}>
                        Hey Welcome back ! 

                    </Text>
                    <Text style={{
                        fontSize:16,
                        color:COLOURS.black
                    }}>
                        Hello again you have been missed !
                    </Text>

                </View>

                <View style={{marginBottom:12}}>
                    <Text style={{
                        fontSize:16,
                        fontWeight:400,
                        marginVertical:8,
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
                        placeholder={'Enter your email Address'}
                        placeholderTextColor={COLOURS.black}
                        keyboardType='email-address'
                        style={{
                            width:"100%"
                        }}
                        onChangeText={emailcheck}
                        
                        />

                    </View>
                </View>





                
                <View style={{marginBottom:12}}>
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
                        onChangeText={Passwordcheck}
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
                    marginVertical:6
                    
                }}>
                    <Checkbox
                        style={{
                            marginRight:8,
                            marginVertical:10
                        }}
                        value={isChecked}
                        onValueChange={putischecked}
                        color={isChecked?COLOURS.primary:undefined}
                    />

                    

                    

                    <Text style={{marginVertical:10}}>Remenber Me !</Text>


                     
                </View>

                <Text style={{marginVertical:10}}>{err?err:null}</Text>

                <Button
                    title="Login"
                    onPress={validcheck}
                  
                    filled
                    style={{
                        marginTop:18,
                        marginBottom:4
                    } }
                />

                <View style={{flexDirection:'row',alignItems:'center',marginVertical:20}}>

                    <View
                        style={{
                            flex:1,
                            height:1,
                            backgroundColor:COLOURS.grey,
                            marginHorizontal:10
                        }}
                    />
                    <Text style={{fontSize:14}}>Or Login with</Text>

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
                    marginVertical:22,
                }}>
                    <Text style={{fontSize:16,color:COLOURS.black}}>Don't have an account</Text>
                    <Pressable
                        onPress={()=>navigation.navigate("Signup")}
                        
                    >
                        <Text style={{
                            fontSize:16,
                            color:COLOURS.primary,
                            fontWeight:'bold',
                            marginLeft:6
                        }}>
                            Register
                        </Text>
                    </Pressable>

                </View>

                <Button
                    title="Back"
                    onPress={()=>navigation.navigate("Signup")}
                    
                    style={{
                        marginTop:1,
                        marginBottom:10
                    } }
                
                />
               
            </View>
        </SafeAreaView>
    )
  }


export default Login