import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const boxScreen = () => {
    return (
        <View style={sytles.viewStyle}>
            <View style={sytles.viewStyle1}></View>
            <View style={sytles.viewStyle2Parent}>
                <View style={sytles.viewStyle2}></View>
            </View>
            <View style={sytles.viewStyle3}></View>
        </View>
    )
};

const sytles = StyleSheet.create({
    viewStyle:{
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textStyle:{
        borderWidth: 3,
        borderColor: 'red',
        marginVertical:20,
        margin: 20,
        alignItems: 'flex-start'
    },
    viewStyle1:{
        height:50,
        width: 50,
        backgroundColor: 'red'
    },
    viewStyle2:{
        height:50,
        width: 50,
        backgroundColor: 'green',
    },
    viewStyle2Parent:{
        height: 100,
        justifyContent: 'flex-end'
    },
    viewStyle3:{
        height:50,
        width: 50,
        backgroundColor: 'purple'
    },
});

export default boxScreen;