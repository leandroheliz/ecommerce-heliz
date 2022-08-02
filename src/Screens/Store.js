import { ScrollView } from 'react-native'
import React from 'react'
import { SafeArea, StoreList } from '../MyStore/Styles'
import { StoreInfo } from '../MyStore/StoreInfo'

export default function Store() {
  return (
      <SafeArea>
    <ScrollView>
    <StoreList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
      renderItem={() => <StoreInfo />}
      keyExtractor={(item) => item.name}
    />
   </ScrollView>
 </SafeArea>
  )
}