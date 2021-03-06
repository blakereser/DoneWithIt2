
import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({title, subTitle, image, onPress, renderRightActions, style}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.light}
                onPress={onPress}>    
                <View style={[styles.container, style]}>
                    <Image style={styles.image} source={image} />
                    <View>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.subTitle}>{subTitle}</AppText>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15, 
    },
    image: {
        borderRadius: 35, 
        height: 70,
        width: 70,
        marginRight: 10,
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "500",
    },
})
export default ListItem;