import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.menu}>
            <Button
                onPress={() => navigation.navigate ('Components')}
                title="Components"
                type="clear"
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
            <Button
                title="Color"
                onPress={() => navigation.navigate('Color')}
            />
            <Button
                title="Square"
                onPress={() => navigation.navigate('Square')}
            />
             <Button
                title="Text"
                onPress={() => navigation.navigate('Text')}
            />
            <Button
                title="Box"
                onPress={() => navigation.navigate('Box')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        flex: 1, 
        flexDirection: 'column',
        padding: 5,
        borderColor: 'white',
        borderWidth: 1
    }
});

export default HomeScreen;