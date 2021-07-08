
import React from 'react';
import { View, FlatList, StyleSheet, } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';

const cards = [
    {
      id: 23,
      title: "Sleek red jacket",
      subTitle: "100",
      photo: require("../assets/jacket.jpg")
    },
    {
      id: 1,
      title: "HUGE nice couch",
      subTitle: "100.000",
      photo: require("../assets/couch.jpg")
    },
    
  ]

function ListingsScreen(props) {
    return (

        <View style={styles.container}>
        <Screen>
          <FlatList
            data={cards}
            keyExtractor={cards => cards.id.toString()}
            renderItem={({item}) =>
            <Card
            title={item.title}
            subTitle={"$" + item.subTitle}
            image={item.photo}
            />
          } 
          />
      </Screen>
      </View>
  
  )}
  
  const styles = StyleSheet.create ({
    container: {
      backgroundColor: colors.light,
      flex: 1,
    },
  })

export default ListingsScreen;