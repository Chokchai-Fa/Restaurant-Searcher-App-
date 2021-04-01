import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) =>{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async(id) =>{
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if(!result){          // No result yet
        return null;
    }

    return(
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={ (photo) => photo}
                renderItem={ ({ item }) => {
                    return <Image style={styles.image} source={{ url: item }} /> 
                }}
            
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10
    },
    image:{
        height:200,
        width:300,
        marginBottom:10
    }
});

export default ResultsShowScreen;