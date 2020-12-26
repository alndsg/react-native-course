import React, {useReducer} from 'react';
import {Button, StyleSheet, Text, View, FlatList, ActionSheetIOS} from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    switch (action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state
            : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state
            : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state
            : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, trigger] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    return (
        <View> 
            <ColorCounter  color="Red" 
                onIncrease={() => trigger({ type: 'change_red', payload : COLOR_INCREMENT })}
                OnDecrease={() => trigger({ type: 'change_red', payload : -1 * COLOR_INCREMENT })}
            />
            <ColorCounter color="Green"
                onIncrease={() => trigger({ type: 'change_green', payload : COLOR_INCREMENT })}
                OnDecrease={() => trigger({ type: 'change_green', payload :  -1 * COLOR_INCREMENT })}
            />
            <ColorCounter color="Blue"
                onIncrease={() => trigger({ type: 'change_blue', payload : COLOR_INCREMENT })}
                OnDecrease={() => trigger({ type: 'change_blue', payload :  -1 * COLOR_INCREMENT })}
            />
            <View style={[styles.squareColour,{backgroundColor: `rgb(${state.red},${state.green},${state.blue})`}]}></View>
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