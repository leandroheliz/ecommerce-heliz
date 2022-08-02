import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cart from "../Screens/Cart";
import HomeStackScreen from "../Navigation/HomeStackScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsStackScreen from "../Navigation/SettingsStackScreen";
import Store from "../Screens/Store";

const Tab = createBottomTabNavigator()

const Tabs = () => {

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
          name="Store"
          component={Store}
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

export default Tabs;