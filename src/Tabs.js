import Cart from "./Screens/Cart";
import Categories from "./Screens/Categories";
import HomeStackScreen from "./Navigation/HomeStackScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./Screens/Profile";
import React from "react";
import SettingsStackScreen from "./Navigation/SettingsStackScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Tabs() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}