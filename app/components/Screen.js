
import React from 'react';

import {StyleSheet, SafeAreaView, Platform, StatusBar, View} from 'react-native';
// import Constants from 'react-native'; -> this did not work but if fixed it serves as a 2nd way to implement conditional padding

function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
        flex: 1,
        // paddingTop: Constants.statusBarHeight -> this is the code to implement conditional padding
    },
})

export default Screen;