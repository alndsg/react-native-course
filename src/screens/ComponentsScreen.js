import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ComponentsScreen = () => {
    const name = 'Alan Gomes';
    return <Text style={styles.textStyle}>Hi again!</Text>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24
    }
});

export default ComponentsScreen;