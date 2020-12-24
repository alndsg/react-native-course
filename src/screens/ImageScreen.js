import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImagemScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score={7}/>
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score={10}/>
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={7}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImagemScreen;