import React from 'react';
import { Text, StyleSheet, View } from "react-native";

const DetailsScreen = () => {
    const myName = 'Gocho';

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            <Text style={styles.myName}>{myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
    },
    myName: {
        fontSize: 20
    }
});

export default DetailsScreen;
