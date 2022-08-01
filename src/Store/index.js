import { Searchbar } from 'react-native-paper';
import { StoreInfo } from './StoreInfo';
import { SafeArea, BarSearch, StoreList } from './Styles'

import Cart from "../Screens/Cart";
import Categories from "../Screens/Categories";
import HomeStackScreen from "../Navigation/HomeStackScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from "@react-navigation/native";
import Profile from "../Screens/Profile";
import React from "react";
import SettingsStackScreen from "../Navigation/SettingsStackScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView } from 'react-native';

export default function StoreScreen() {

  const Tab = createBottomTabNavigator()

  return (
    <SafeArea>
      <BarSearch>
        <Searchbar placeholder="Buscar" />
      </BarSearch>
      <ScrollView>
      <StoreList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => <StoreInfo />}
        keyExtractor={(item) => item.name}
      />
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
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: '',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-circle" color={color} size={size} />
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
              </ScrollView>
    </SafeArea>

  )
}


