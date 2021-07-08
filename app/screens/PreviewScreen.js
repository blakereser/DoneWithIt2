import React from 'react';
import { StyleSheet, View, Image, } from "react-native";

import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'

function PreviewScreen(props) {
    return (
        <View style={styles.container}
        >
            <View style={styles.leftButton}>
                <MaterialCommunityIcons name="close" color="white" size={35}/>
            </View>
            <View style={styles.rightButton}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
            </View>

            <Image
                style={styles.image}
                source={require("../assets/chair.jpg")}
                resizeMode= "contain"
            >
            </Image>  

        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    image: {
        height: "100%",
        width: "100%",
    },

    leftButton: {
        position: "absolute",
        top: 40,
        left: 30,

    },
    rightButton: {
        top: 40,
        right: 30,
        position: "absolute",

    }
});
export default PreviewScreen;