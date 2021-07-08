import React from 'react';
import { View, StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

function TapeDeckSelect(props) {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Text style={styles.title}>TapeDeck</Text>
                <MaterialCommunityIcons style={styles.filter} name="filter" size={30}/>
            </View>
            <View style={styles.container}>
                <Image style={styles.images} source={require("../assets/cassettes/cassette1.png")}/>
                <Image style={styles.images} source={require("../assets/cassettes/cassette2.png")}/>
                <Image style={styles.images} source={require("../assets/cassettes/cassette3.png")}/>
            </View>
            <View style={styles.footer}>
                <MaterialCommunityIcons name="account" size={30}/>
                <MaterialCommunityIcons name="play" size={40}/>
                <MaterialCommunityIcons name="message" size={30}/>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 34, 
        fontWeight: '600',
        padding: 20,
    },
    container: {
        alignItems: "center",
        padding: 20,
    },
    header: {
        flexDirection: "row",
    },
    images: {
        height: 250,
        width: 400,
    },
    filter: {
        position: "absolute",
        right: 30,
        top: 20,
    },
    footer: {
        backgroundColor: "white",
        height: 50,
        width: "100%",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
    },
    fade: {
        backgroundColor: "white",
        opacity: 0.4,
    }
})
export default TapeDeckSelect;