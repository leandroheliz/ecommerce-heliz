import { Button, Text, View } from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Este es el home 1</Text>
      <Button
        title="Ir a home 2"
        onPress={() => navigation.navigate("Home2")}
      />
    </View>
  );
};

export default HomeScreen1;