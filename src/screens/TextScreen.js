import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const TextScreen = () => {
    const[password, setPassword] = useState('');
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.boxInput}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            <Text>My name is: {password}</Text>
            {password.length < 5 && password.length > 3 ? <Text>Password accepted!</Text> : <Text>Password must be 4 characters!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    boxInput: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;