
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import IconComponent from '../components/IconComponent';
import ListItemSeparator from '../components/ListItemSeparator';


const iconSet= [
    {
      id: 1,
      color: colors.primary,
      icon: "format-list-bulleted",
      size: 50,
      title: "My Listings"
    },
    {
      id: 2,
      color: colors.secondary,
      icon: "email",
      size: 50,
      title: "My Messages"
    },
  ]

function AccountScreen(props) {
    return (
        <View style={styles.container}>
        <Screen>

            <View style={styles.header}>
            <ListItem
                style={{backgroundColor:"white", alignItems:"center"}}
                title={"Blake Reser"}
                subTitle={"blake@gmail.com"}
                image={require("../assets/mosh.jpg")}
                />
            </View>

            <View style={styles.iconSet}>
            <FlatList
                data={iconSet}
                keyExtractor={icon => icon.id.toString()} //id is not necessary, I could also have used title
                renderItem={({item}) =>
                <IconComponent 
                color={item.color}
                icon={item.icon}
                size={item.size}
                title={item.title}
                />
            }
            ItemSeparatorComponent={ListItemSeparator}
            ></FlatList>
            </View>

            <IconComponent
            color={colors.yellow}
            icon={"logout"}
            size={50}
            title={"Log Out"}
            />

        </Screen>
        </View>

)}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flex: 1,
  },
  header: {
    marginBottom: 40,
    marginTop: 20,
  },
  iconSet: {
    marginBottom: 20,
  }

})


export default AccountScreen;