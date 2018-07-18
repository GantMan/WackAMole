import React from 'react'
import { View, FlatList } from 'react-native'
import Mole from '../Mole/mole'

const grass = '#11991e'

const renderHole = ({item}) => {
  return (
    <Mole {...item} />
  )
}

export default (props) =>
  <View style={styles.container}>
    <FlatList
      data={props.moles || []}
      keyExtractor={(_item, index) => index}
      renderItem={renderHole}
      contentContainerStyle={styles.listContainer}
      style={styles.list}
      numColumns={3}
    />
  </View>

const styles = {
  container: {
    flex: 1,
    backgroundColor: grass
  },
  list: {
    padding: 20
  },
  listContainer: {
    // Take full space with flex 1
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}
