import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Welcome from './Pages/Welcome';
import Home from './Pages/Home';
import { GoalInput } from './Pages/Index';
import GoalItem from './Pages/Index';

const Stack=createNativeStackNavigator()

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Welcome'
      >

        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown:false
          }}


        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown:false
        }}
        />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown:false
        }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown:false
        }}
        />


        

        

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
