import React from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text
  } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>El todos</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 56,
        paddingTop: 10,
        alignItems: "center",
        backgroundColor: "#ff5500"
    },
    title: {
        color: "#fff",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold"
    }
})
  