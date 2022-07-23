import React from 'react'
import Settings1 from '../Screens/Settings1'
import Settings2 from '../Screens/Settings2'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function SettingsStackScreen() {

  const SettingsStack = createNativeStackNavigator()

  return (

  <SettingsStack.Navigator>
    <SettingsStack.Screen name="Settings1" component={Settings1} />
    <SettingsStack.Screen name="Settings2" component={Settings2} />
  </SettingsStack.Navigator>
  
  )
}