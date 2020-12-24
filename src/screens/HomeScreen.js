import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Button
                onPress={() => navigation.navigate ('Components')}
                title="Components"
            />
            <Button
                title="List"
                onPress={() => navigation.navigate('List')}
            />
            <Button
                title="Image"
                onPress={() => navigation.navigate('Image')}
            />
            <Button
                title="Counter"
                onPress={() => navigation.navigate('Counter')}
            />
        </View>
    );
};

export default HomeScreen;