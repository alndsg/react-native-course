import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ImagemDetail = ({imageSource, title, score}) => {
    //console.log(props);
    return (
        <View>
            <Image source={imageSource} />
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImagemDetail;