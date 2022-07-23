import { Button, Text, View } from 'react-native'

import React from 'react'
import { useNavigation } from "@react-navigation/native";

export default function Settings1() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Este es settings 1</Text>
      <Button title="ir a Settings2" onPress={() => navigation.navigate("Settings2")} />
    </View>
  )
}