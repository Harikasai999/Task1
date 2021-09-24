import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

function TextField({ ...otherProps }) {
    return (


        <TextInput
            width="100%"
            {...otherProps}
        />

    );
}

const styles = StyleSheet.create({

});

export default TextField;
