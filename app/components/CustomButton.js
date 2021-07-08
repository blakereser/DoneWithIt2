import React from "react";
import { Text, StyleSheet, TouchableOpacity} from "react-native";

import colors from "../config/colors";

function CustomButton({title, onPress, color = "primary"}) {
  return (
    <TouchableOpacity 
    style={[styles.button, { backgroundColor: colors[color]}]} 
    onPress={onPress} >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )};

  const styles = StyleSheet.create({
    button: {
      height: 50,
      width: "100%",
      backgroundColor: colors.primary,
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center", 
      marginTop: 10,
    },

    text: {
      fontWeight: "bold",
      color: colors.white,
      fontSize: 18,
      textTransform: "uppercase",
    }
  });

  export default CustomButton;