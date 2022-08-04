import React from "react";
import { Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Searchbar } from 'react-native-paper';
import { SafeArea, BarSearch, StoreList } from "./Styles";
import { CardInfo } from "./CardInfo";

const HomeScreen1 = () => {

  const navigation = useNavigation();

  return (
    <SafeArea>
      <BarSearch>
        <Searchbar placeholder="Buscar" />
      </BarSearch>
      <ScrollView>

        <StoreList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
          renderItem={() => <CardInfo />}
          keyExtractor={(item) => item.name}
        />

        <Button
          title="Ir a home 2"
          onPress={() => navigation.navigate("Home2")}
        />

      </ScrollView>
    </SafeArea>
  );
};

export default HomeScreen1;