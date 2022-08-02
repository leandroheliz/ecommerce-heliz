import React from "react";
import { Searchbar } from 'react-native-paper';
import { SafeArea, BarSearch } from './Styles'
import { ScrollView } from 'react-native';
import Tabs from '../Navigation/Tabs';
import Store from "../Screens/MyStore";

export default function StoreScreen() {

  return (
    <SafeArea>
      <ScrollView>
      <BarSearch>
        <Searchbar placeholder="Buscar" />
      </BarSearch>
        <Store/>
        <Tabs />
      </ScrollView>
    </SafeArea>
  )
}


