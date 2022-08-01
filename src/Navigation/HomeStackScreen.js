import HomeScreen1 from '../Screens/HomeScreen1'
import HomeScreen2 from '../Screens/HomeScreen2'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function HomeStackScreen() {
  
  const HomeStack = createNativeStackNavigator()

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen1} />
      <HomeStack.Screen name="Home2" component={HomeScreen2} />
    </HomeStack.Navigator>

  )
}