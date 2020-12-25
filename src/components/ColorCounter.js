import React from 'react';
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';

const ColorCounter = ({ color, onIncrease, OnDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color} +`} onPress={() => onIncrease()}/>
            <Button title={`Decrease ${color} -`} onPress={() => OnDecrease()}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;