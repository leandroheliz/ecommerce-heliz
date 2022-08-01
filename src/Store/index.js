import { Searchbar } from 'react-native-paper';
import { StoreInfo } from './StoreInfo';
import { SafeArea, BarSearch, StoreList } from './Styles'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Profile from '../Screens/Profile';

export default function StoreScreen() {
  
  const Tab = createBottomTabNavigator()

  return (
    <SafeArea>
      <BarSearch>
        <Searchbar placeholder="Buscar" />
      </BarSearch>
      <StoreList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => <StoreInfo />}
        keyExtractor={(item) => item.name}
      />
       <NavigationContainer>
       <Tab.Navigator>
       <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeArea>
  )
}


