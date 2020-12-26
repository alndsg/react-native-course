import React, { useReducer } from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'change_Increase' || 'change_Decrease', playload: 1}
    switch(action.type){
        case 'change_Increase':
            return {...state, count: state.count + action.payload};
        case 'change_Decrease':
            return state.count - action.payload < 0 
            ? state
            : {...state, count: state.count - action.payload};
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, trigger] = useReducer(reducer, {count: 0});

    return (
        <View>
            <Button title="Increase" onPress={() => {trigger({ type: 'change_Increase', payload: 1 })}}/>
            <Button title="Decrease" onPress={() => {trigger({ type: 'change_Decrease', payload: 1 })}}/>
            <Text>Current Count:{state.count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;