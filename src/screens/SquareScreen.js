import React, {useState} from 'react';
import {Button, StyleSheet, Text, View, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);

    const setColor = (color, newValue) => {
        if(newValue > 255 || newValue < 0){
            return null;
        }
        console.log(`color ${color} = ${newValue}`);
        switch (color){
            case 'red':
                setRed(newValue);   return null;
            case 'green':
                setGreen(newValue); return null;
            case 'blue':
                setBlue(newValue);  return null;
            default:
                return null;
        }
    };

    return (
        <View> 
            <ColorCounter  color="Red" 
                onIncrease={() => setColor('red', red + COLOR_INCREMENT)}
                OnDecrease={() => setColor('red', red - COLOR_INCREMENT)}
            />
            <ColorCounter color="Green"
                onIncrease={() => setColor('green', green + COLOR_INCREMENT)}
                OnDecrease={() => setColor('green', green - COLOR_INCREMENT)}
            />
            <ColorCounter color="Blue"
                onIncrease={() => setColor('blue', blue + COLOR_INCREMENT)}
                OnDecrease={() => setColor('blue', blue - COLOR_INCREMENT)}
            />
            <View style={[styles.squareColour,{backgroundColor: `rgb(${red},${green},${blue})`}]}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    squareColour:{
        height: 150,
        width: 150,
    }
});

export default SquareScreen;