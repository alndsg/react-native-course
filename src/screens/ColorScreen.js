import React, { useState } from 'react';
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors[colors.length - 1]);
    return (
        <View style>
            <Button title="Add a color" onPress={() => {
                    setColors([...colors, randomRGB()])
            }} />
             
            <FlatList
                data={colors}
                keyExtractor={item => item}
                renderItem={({item}) => {
                    return <View style={[styles.squareColors, {backgroundColor: item}]} />
                }}
            />
        </View>
    );
};

const randomRGB = () => {
    const red =   Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue =  Math.floor(Math.random() * 256);
    const colorNew = `rgb(${red},${green},${blue})`;
    return colorNew;
};

const styles = StyleSheet.create({
    squareColors:{
        height: 100, 
        width: 100,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'flex-start'
    }
});

export default ColorScreen;