
import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import AppText from '../components/AppText';

// parameters I need to be able to change in my function: color, icon, size, title

function IconComponent({
    color = "black", 
    icon, 
    size = 40, 
    title = "no title",
}) {
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: color,
                borderRadius: size/2,
                height: size,
                width: size,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
            }}
                >
                <MaterialCommunityIcons 
                    name= {icon} 
                    color={colors.white}   
                    size={size/2}/>
            </View>
            <View style={styles.textContainer}>
                <AppText style={styles.text}>{title}</AppText>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.white,
        padding: 15
    },
    text: {
        fontSize: 22,
        fontWeight: "bold"
    },
    textContainer: {
        justifyContent: "center",
    }
})

export default IconComponent;