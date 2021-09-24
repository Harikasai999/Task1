import React from "react";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";



function Button({ onPress, children }) {
    return (
        <Pressable
            onPress={onPress ? onPress : null}
        >
            {children}
        </Pressable>
    );
}

const styles = StyleSheet.create({

});

export default Button;
