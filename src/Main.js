import Cart from "./Screens/Cart";
import Categories from "./Screens/Categories";
import HomeStackScreen from "./Navigation/HomeStackScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import SettingsStackScreen from "./Navigation/SettingsStackScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function Main() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
         <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
    }}>
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
           <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="store" color={color} size={size} />
            ),
          }}
        />
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
          <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}